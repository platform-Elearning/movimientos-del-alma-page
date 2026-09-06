// Prerender: convierte la SPA en una pagina HTML real por ruta.
//
// El problema que resuelve: Vite entrega un unico index.html con <div id="root">
// vacio y todo el contenido lo pinta React en el navegador. Cualquier cliente que
// no ejecute JavaScript -- varios crawlers y la mayoria de los agentes -- ve una
// pagina en blanco. Aca renderizamos cada ruta en Node y guardamos el HTML ya
// pintado, sin tocar una linea de los componentes.
//
// Ademas genera sitemap.xml y llms.txt desde la misma lista de rutas, para que no
// puedan volver a desincronizarse.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = resolve(HERE, "..");
const DIST = join(APP, "dist");

const { render } = await import(join(APP, "dist-ssr", "entry-server.mjs"));
const { routes, SITE_URL, SITE_NAME } = await import(join(APP, "src", "routes.js"));

const template = readFileSync(join(DIST, "index.html"), "utf8");

// Solo el build de produccion se deja indexar. dev sirve el mismo contenido real
// desde que existe el prerender, asi que sin esto le estaria ofreciendo a
// buscadores y agentes una copia entera del sitio en otro dominio. El default es
// el seguro: si nadie declara el entorno, no se indexa.
const IS_PROD = process.env.SITE_ENV === "prod";

// --- guardarrail: que AppRouter y routes.js no se separen ------------------
// El sitemap del sitio tenia una sola URL de nueve porque nadie lo actualizaba a
// mano. Si vuelve a pasar, que reviente el build y no en produccion.
const appRouter = readFileSync(join(APP, "src", "router", "AppRouter.jsx"), "utf8");
// Las rutas con parametro (/verificar/:code) quedan fuera por definicion: no se
// pueden prerenderizar porque el conjunto de valores no se conoce en build time.
// Se resuelven en el navegador y su prefijo va declarado en spa_prefixes.
const declared = [...appRouter.matchAll(/path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((path) => !path.includes(":"));
const known = new Set(routes.map((r) => r.path));
const missing = declared.filter((p) => !known.has(p));
if (missing.length) {
  console.error(`\n[prerender] Rutas en AppRouter.jsx que faltan en src/routes.js: ${missing.join(", ")}`);
  console.error("[prerender] Agregalas ahi o no van a existir para buscadores ni agentes.\n");
  process.exit(1);
}

// --- helpers ---------------------------------------------------------------
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Texto visible del HTML renderizado: lo mismo que ve un agente sin JS.
const visibleText = (html) =>
  html.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

// Texto propio de la pagina, sin el menu ni el pie. Son identicos en las nueve
// rutas: si entran en la descripcion, las nueve descripciones arrancan iguales
// y ninguna dice de que trata la pagina.
const contentText = (html) =>
  visibleText(html.replace(/<(nav|footer)[^>]*>[\s\S]*?<\/\1>/gi, " "));

// Descripcion derivada del contenido real. Preferimos esto a inventar copy:
// una meta description que no coincide con la pagina es peor que no tenerla.
const deriveDescription = (text, max = 155) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "…";
};

// Reemplaza el contenido de una meta/tag del template, si existe.
const setTag = (html, re, replacement) => (re.test(html) ? html.replace(re, replacement) : html);

// --- HTML -> Markdown -----------------------------------------------------
// La version markdown existe por una sola razon: gastar menos tokens. Por eso
// se van el menu, el pie, los botones y los SVG -- son identicos en las nueve
// paginas y no dicen nada de ninguna. Las imagenes solo sobreviven si tienen
// alt: un <img> con nombre hasheado y sin alt es ruido puro.
const decode = (s) => s
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&aacute;/g, "á").replace(/&eacute;/g, "é").replace(/&iacute;/g, "í")
  .replace(/&oacute;/g, "ó").replace(/&uacute;/g, "ú").replace(/&ntilde;/g, "ñ");

function toMarkdown(html) {
  let m = html
    .replace(/<(script|style|noscript|svg|iframe|button|nav|footer)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<img[^>]*alt="([^"]+)"[^>]*src="([^"]*)"[^>]*>/gi, "\n![$1]($2)\n")
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]+)"[^>]*>/gi, "\n![$2]($1)\n")
    .replace(/<img[^>]*>/gi, "")
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
             (_, href, txt) => { const t = txt.replace(/<[^>]+>/g, "").trim(); return t ? `[${t}](${href})` : ""; })
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi,
             (_, lvl, txt) => `\n\n${"#".repeat(Number(lvl))} ${txt.replace(/<[^>]+>/g, "").trim()}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi,
             (_, txt) => `\n- ${txt.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()}`)
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|section|ul|ol|tr)>/gi, "\n\n")
    .replace(/<[^>]+>/g, "");
  return decode(m)
    .split("\n").map((l) => l.replace(/[ \t]+/g, " ").trim()).join("\n")
    .replace(/\n{3,}/g, "\n\n").trim();
}

function buildPage(route, markup) {
  const text = contentText(markup);
  const description = route.description || deriveDescription(text);
  const url = SITE_URL + (route.path === "/" ? "/" : route.path);
  let html = template;

  html = setTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${esc(route.title)}</title>`);
  html = setTag(html, /<meta\s+name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${esc(description)}" />`);
  // El canonical del template apuntaba a /clasesOnline en TODAS las rutas: le
  // decia a Google que cada pagina es en realidad esa otra. Ahora es por pagina.
  html = setTag(html, /<link\s+rel="canonical"[^>]*\/>/i, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta\s+property="og:title"[\s\S]*?\/>/i,
    `<meta property="og:title" content="${esc(route.title)}" />`);
  html = setTag(html, /<meta\s+property="og:description"[\s\S]*?\/>/i,
    `<meta property="og:description" content="${esc(description)}" />`);
  html = setTag(html, /<meta\s+property="og:url"[^>]*\/>/i, `<meta property="og:url" content="${url}" />`);

  if (!IS_PROD) {
    html = setTag(html, /<meta\s+name="robots"[^>]*\/>/i, `<meta name="robots" content="noindex, nofollow" />`);
  } else if (route.index === false) {
    html = setTag(html, /<meta\s+name="robots"[^>]*\/>/i, `<meta name="robots" content="noindex, follow" />`);
  }

  // El contenido pintado entra donde React lo va a re-tomar al hidratar.
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  return { html, chars: text.length };
}

// --- render por ruta -------------------------------------------------------
console.log("\n[prerender] renderizando rutas:");
const report = [];
const markdowns = [];
for (const route of routes) {
  const markup = render(route.path);
  const { html, chars } = buildPage(route, markup);
  const outDir = route.path === "/" ? DIST : join(DIST, route.path);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);

  // Version markdown de la misma pagina, derivada del mismo render: no hay dos
  // copias que mantener sincronizadas, hay una fuente y dos salidas.
  // Si la pagina ya trae su propio H1, no le anteponemos otro: dos H1 seguidos
  // confunden la jerarquia que el agente usa para orientarse.
  const body = toMarkdown(markup);
  const md = /^#\s/m.test(body.split("\n").slice(0, 4).join("\n"))
    ? `${body}\n`
    : `# ${route.title}\n\n${body}\n`;
  writeFileSync(join(outDir, "index.md"), md);
  markdowns.push({ route, md });

  report.push({ path: route.path, chars, mdBytes: Buffer.byteLength(md), htmlBytes: Buffer.byteLength(html) });
  console.log(`  ${String(chars).padStart(6)} chars  ${route.path}`);
}

// --- sitemap.xml -----------------------------------------------------------
const today = new Date().toISOString().slice(0, 10);
const indexable = routes.filter((r) => r.index !== false);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join("\n")}
</urlset>
`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);

// --- 404.html --------------------------------------------------------------
// Pagina de error autonoma, servida por CloudFront cuando S3 no encuentra la
// clave. Dos decisiones que importan:
//
// 1. NO lleva el bundle de la app. Si lo llevara, React montaria sobre una URL
//    que no matchea ninguna ruta, vaciaria el contenedor y dejaria la pantalla
//    en blanco -- peor que no tener pagina de error.
// 2. NO hereda el <head> del template. Ese head trae canonical, og:url y JSON-LD
//    apuntando a contenido real; en una pagina de error todo eso miente. Se arma
//    uno limpio y se le presta unicamente la hoja de estilos, cuyo nombre lleva
//    hash y por eso se lee del build en vez de hardcodearse.
const cssHref = (template.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/i) || [])[1];
const notFound = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>Página no encontrada | ${SITE_NAME}</title>
    ${cssHref ? `<link rel="stylesheet" href="${cssHref}" />` : ""}
    <style>
      body { margin: 0; min-height: 100vh; display: flex; align-items: center;
             justify-content: center; background: #252422; color: #ffffff;
             font-family: "Montserrat", system-ui, sans-serif; text-align: center;
             padding: 2rem; box-sizing: border-box; }
      .code { font-size: clamp(4rem, 18vw, 9rem); line-height: 1; color: #c08c44; margin: 0; }
      h1 { font-size: clamp(1.25rem, 4vw, 1.75rem); font-weight: 600; margin: 1rem 0 0.5rem; }
      p { color: #f0f0f0; margin: 0 0 2rem; }
      a { display: inline-block; padding: 0.85rem 2rem; border: 1px solid #c08c44;
          border-radius: 999px; color: #c08c44; text-decoration: none; font-weight: 600; }
      a:hover { background: #c08c44; color: #252422; }
      ul { list-style: none; padding: 0; margin: 2.5rem 0 0; }
      li { display: inline-block; margin: 0 0.75rem; }
      li a { padding: 0; border: 0; font-weight: 400; font-size: 0.9rem; }
      li a:hover { background: none; text-decoration: underline; }
    </style>
  </head>
  <body>
    <main>
      <p class="code">404</p>
      <h1>Esta página no existe</h1>
      <p>Puede que el enlace esté viejo o que la dirección tenga un error.</p>
      <a href="/">Volver al inicio</a>
      <ul>
${indexable.filter((r) => r.path !== "/").map((r) => `        <li><a href="${r.path}">${r.title.split("|")[0].trim()}</a></li>`).join("\n")}
      </ul>
    </main>
  </body>
</html>
`;
writeFileSync(join(DIST, "404.html"), notFound);

// --- robots.txt ------------------------------------------------------------
// Se genera junto al sitemap y por la misma razon: mantenido a mano se
// desincroniza, y en dev tiene que decir lo contrario que en produccion.
const robots = IS_PROD
  ? `# robots.txt - ${SITE_NAME}
# ${SITE_URL}

# Content-Signal declara tres permisos distintos, y son distintos a proposito:
#   search    = aparecer en resultados de busqueda y ser citado con link
#   ai-input  = que un asistente lea la pagina para responder una pregunta ahora
#   ai-train  = que el contenido se use para entrenar un modelo
# Para una escuela que vive de que la encuentren, los dos primeros traen gente.
# El tercero no devuelve nada.
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /
${routes.filter((r) => r.index === false).map((r) => `Disallow: ${r.path}`).join("\n")}
Disallow: /admin/
Disallow: /private/
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`
  : `# Entorno de prueba. No indexar: el contenido real vive en ${SITE_URL}
User-agent: *
Content-Signal: search=no, ai-input=no, ai-train=no
Disallow: /
`;
writeFileSync(join(DIST, "robots.txt"), robots);

// --- llms.txt --------------------------------------------------------------
// Indice en markdown para agentes: que es el sitio y donde esta cada cosa.
const llms = `# ${SITE_NAME}

> ${deriveDescription(contentText(render("/")), 200)}

## Páginas

${indexable.map((r) => `- [${r.title}](${SITE_URL}${r.path === "/" ? "/" : r.path})`).join("\n")}
`;
writeFileSync(join(DIST, "llms.txt"), llms);

// llms-full.txt: todo el contenido del sitio en un solo archivo, para el agente
// que prefiere una lectura y no nueve.
const full = markdowns
  .filter(({ route }) => route.index !== false)
  .map(({ md }) => md).join("\n---\n\n");
writeFileSync(join(DIST, "llms-full.txt"), `# ${SITE_NAME}\n\n${full}`);

const htmlTotal = report.reduce((a, r) => a + r.htmlBytes, 0);
const mdTotal = report.reduce((a, r) => a + r.mdBytes, 0);
console.log(`\n[prerender] ${routes.length} páginas, sitemap con ${indexable.length} URLs, llms.txt y llms-full.txt generados.`);
console.log(`[prerender] 404.html generado${cssHref ? " (con la hoja de estilos del sitio)" : " (SIN css: revisar el template)"}`);
console.log(`[prerender] entorno: ${IS_PROD ? "prod (indexable)" : "no-prod (noindex, robots.txt con Disallow: /)"}`);
console.log(`[prerender] markdown vs html: ${(mdTotal / 1024).toFixed(0)} kB vs ${(htmlTotal / 1024).toFixed(0)} kB (${(100 - (mdTotal / htmlTotal) * 100).toFixed(0)}% menos).`);
const flacas = report.filter((r) => r.chars < 200);
if (flacas.length) {
  console.log(`[prerender] OJO: sin texto util -> ${flacas.map((r) => r.path).join(", ")}`);
}
