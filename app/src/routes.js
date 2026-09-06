// Fuente unica de verdad de las rutas publicas.
// La consumen el prerender, el sitemap y llms.txt. Si se agrega una ruta en
// AppRouter.jsx y no aca, el prerender avisa en el build en vez de dejar la pagina
// invisible en silencio (que es como el sitemap termino con una sola URL).
//
// title:       lo que ve el usuario en la pestaña y el buscador.
// description: opcional. Si no esta, se deriva del texto realmente renderizado,
//              asi nunca describe algo que la pagina no dice.
// index:       false = fuera del sitemap y con noindex. Para paginas de sesion.

export const routes = [
  { path: "/",                   title: "Movimientos del Alma | Formaciones y clases de danza" },
  { path: "/clasesOnline",       title: "Formaciones Online Certificadas | Movimientos del Alma" },
  { path: "/clases",             title: "Clases presenciales | Movimientos del Alma" },
  { path: "/nosotros",           title: "Quiénes somos | Movimientos del Alma" },
  { path: "/pack-clases",        title: "Pack de clases | Movimientos del Alma" },
  { path: "/info-jime",          title: "Jimena Rodríguez | Movimientos del Alma" },
  { path: "/buscar-certificado", title: "Verificar certificado | Movimientos del Alma" },
  { path: "/login",              title: "Ingresar | Movimientos del Alma",  index: false },
  { path: "/register",           title: "Crear cuenta | Movimientos del Alma", index: false },
];

export const SITE_URL = "https://mda-ifi.com";
export const SITE_NAME = "Movimientos del Alma";
