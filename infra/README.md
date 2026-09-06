# Infra para que el prerender se vea en producción

El build genera una página HTML y una markdown por ruta. Para que CloudFront las
entregue hacen falta cambios en el repo de infra, que **ya están aplicados en local**
(sin commitear ni pushear).

La función del edge vive **solo** en el repo de infra, como
`aws-s3/viewer-request.js.tftpl`, con su test al lado
(`node viewer-request.test.mjs viewer-request.js.tftpl`). No hay copia acá a propósito:
dos copias se desincronizan.

## Por qué hace falta la función

S3 guarda claves planas, no carpetas. El build escribe la clave `clases/index.html`, pero
el visitante pide `/clases`, que como clave no existe. S3 devuelve 404, el
`custom_error_response` de la distribution lo convierte en 200 sirviendo `/index.html`, y
el resultado es que **todas las rutas muestran la home**.

La CloudFront Function traduce `/clases` a `/clases/index.html` en el evento
`viewer-request`, antes de que la request llegue al origen. Y de paso elige
`/clases/index.md` cuando el cliente manda `Accept: text/markdown`.

## El estándar, para los proyectos que vengan

La función clasifica cada request en cuatro casos, y es el mismo diseño para un sitio de
contenido que para una app detrás de login:

| Tipo | Ejemplo | Qué se sirve |
|---|---|---|
| Asset (tiene extensión) | `/assets/x.js` | el archivo tal cual |
| Ruta de app declarada | `/alumnos/42/curso/7` | el shell de la SPA; resuelve el router |
| Cualquier otra ruta | `/clases` | `/clases/index.html` prerenderizado |
| Ese archivo no existe | `/inventado` | lo que diga el `custom_error_response` |

Una CloudFront Function no tiene red, así que no puede preguntarle a S3 si un objeto
existe: la tabla va horneada. Cada proyecto declara sus rutas de app en
`var.spa_prefixes`, y **todo lo que no declare tiene que estar prerenderizado**.

- `movimientos-del-alma-page`: `spa_prefixes = ["/verificar"]`. Todo el sitio es
  contenido prerenderizado salvo la credencial pública, cuya URL lleva el código del
  certificado y por lo tanto no se conoce en build time.
- `movimientos-del-alma-cursos`: declararía `/admin`, `/alumnos`, `/profesores` y las
  rutas de sesión, y prerenderizaría sus páginas públicas.

El match es contra `prefijo + "/"` además de la igualdad exacta, para que `/admin` no
capture `/administracion`. Está cubierto en el test.

**Cada prefijo sirve su propio shell** (`<prefijo>/index.html`), no el de la raíz. Si
sirviera el de la raíz, una credencial compartida mostraría por un instante la home de la
escuela, con su título y sus meta, antes de repintarse. Requisito: todo prefijo declarado
tiene que tener su shell prerenderizado — para `/verificar` es el formulario.

**Los redirects van en el edge, no en el router.** `var.redirects` responde un 301 desde
la función. Un redirect escrito en React es invisible para quien no ejecuta JavaScript —el
crawler ve una página vacía— y además nunca comunica el 301, que es lo que hace que el
buscador traslade la URL vieja a la nueva. Hoy: `/buscar-certificado` → `/verificar`.

El origin es el REST endpoint con OAI (`s3_origin_config`), no el website endpoint de S3,
así que no hay forma de que S3 resuelva el índice de directorio solo.

## Qué se cambió, y dónde

El repo de infra lo clona cada pipeline en tiempo de deploy, y los dos proyectos
productivos usan **ramas distintas**:

| Proyecto | Rama que clona |
|---|---|
| `movimientos-del-alma-page` | `main` |
| `movimientos-del-alma-cursos` | `full-deploy-with-dev-subdomain` |

### Rama `main`

- `main.tf` — provider AWS `3.4` → `~> 3.76`. `aws_cloudfront_function` no existe antes de
  la 3.42. Se queda en 3.x: la 4.0 partió `aws_s3_bucket` en recursos separados y el
  bloque `website { }` de ese mismo archivo dejaría de funcionar.
- `viewer-request.js.tftpl` — nuevo, la plantilla de la función, más su test.
- `variables.tf` — `enable_prerender_routing` (**default `false`**) y `spa_prefixes` (default `[]`).
- `cloudfront.tf` — el recurso con `count` y la asociación con `dynamic`, en prod y dev.
  Con la variable en `false` el plan es idéntico al de antes.
- `uploadweb.tf` — claves nuevas en el mapa de `content_type`.

### Rama `full-deploy-with-dev-subdomain`

Solo el mapa de `content_type`, para que ese archivo no se separe entre ramas. Sin
provider bump, sin función, sin tocar su CloudFront.

**Efecto sobre `cursos`: ninguno.** Su build produce `.js`, `.css`, `.png`, `.jpg` y
`.mp4`; no genera ningún `.txt`, `.xml` ni `.md`, así que ninguna clave nueva aplica.

### Workflow de este repo

`.github/workflows/react-s3-web.yml` pasa `-var="enable_prerender_routing=true"` y agrega
los targets de la función y de la distribution. El deploy normal está targeteado al
bucket y a los objetos, así que sin esos targets el CloudFront nunca se actualizaría.

## Por qué el content-type estaba mal

`uploadweb.tf` sube los archivos con `aws_s3_bucket_object` y resuelve el tipo con un
`lookup` indexado por **los últimos 3 caracteres del nombre**. El mapa tenía `tml`, `css`,
`jpg`, `peg`, `png`, `gif`, `svg` y `.js`. No tenía `txt` ni `xml`, y por eso `robots.txt`
y `sitemap.xml` se servían como `application/octet-stream`.

Se agregaron `txt`, `xml`, `.md` y `son` (por `.json`). Solo tipos de texto, a propósito.

**Nota:** este pipeline no usa `aws s3 sync`. Los archivos los sube Terraform. Cualquier
arreglo de content-type va en ese mapa, no en el pipeline.

## Hoja de ruta hacia el estándar

El objetivo es que prerender sea el default y que el 404 sea un 404. **El orden importa:
el catch-all no se puede tocar antes de que los dos proyectos prerendericen**, porque hoy
es lo único que hace que las rutas de app funcionen.

| Fase | Qué | Estado |
|---|---|---|
| 1 | `page`: prerender + función, en dev | **hecho y verificado** (2026-09-06) |
| 2 | `page`: promover a producción por PR `develop → main` y verificar | **hecho** (2026-09-06) |
| 3 | `page`: catch-all → 404 real, con página 404 propia | **hecho y verificado en producción** |
| 4 | `cursos`: auditar SSR-safety, prerender de rutas públicas, declarar `spa_prefixes` | siguiente |
| 5 | `cursos`: catch-all → 404 real. `enable_prerender_routing` pasa a default y se elimina | pendiente |

### Estado de `mda-ifi.com` al cerrar la fase 3

Auditoría en producción: **12 OK / 6 faltan**, contra 1 OK al empezar.

| | Antes | Ahora |
|---|---|---|
| Texto en la home | 68 caracteres | 6.836 |
| URLs en el sitemap | 1, a mano, de octubre 2025 | 7, generadas en cada build |
| Canonical | `/clasesOnline` en las 9 rutas | uno por página |
| Markdown por ruta | no existía | 42 kB contra 235 kB de HTML |
| Postura frente a la IA | ninguna declarada | `search=yes, ai-input=yes, ai-train=no` |
| URL inexistente | 200 con la home | 404 real con página propia |

Los 6 `FALTA` que quedan son ausencias correctas: cinco `.well-known` de capacidades
(API Catalog, Agent Skills, MCP Server Card, OAuth ×2) que solo aplican a un sitio con una
API que un agente deba operar, y los `Link:` headers, que ni `developers.cloudflare.com`
publica. Ese es el techo del sitio y ya está alcanzado.

**Corrección sobre el orden del catch-all.** Cada proyecto tiene su propia distribution
con su propio `custom_error_response`: son independientes. `page` no tiene que esperar a
`cursos` para pasar a 404 real — le alcanza con estar verificado en producción, porque
todas sus rutas tienen archivo. Lo que sí no se puede es tocar el de `cursos` antes de
que `cursos` prerenderice.

La fase 3 ya está resuelta en código, con dos piezas:

- **`var.not_found_page`** en el repo de infra. Vacío —el default— conserva el catch-all
  tal cual para todo proyecto que no haya migrado. Con una ruta, la distribution sirve esa
  página con un 404 de verdad. Solo se puede encender cuando **todas** las rutas del sitio
  existen como archivo o están declaradas en `spa_prefixes`.
- **`404.html` generado por el build.** Dos decisiones deliberadas: no carga el bundle de
  la app (React montaría sobre una URL sin ruta que matchee, vaciaría el contenedor y
  dejaría la pantalla en blanco, peor que no tener página de error) y no hereda el `<head>`
  del template (su canonical, `og:url` y JSON-LD apuntan a contenido real y acá mentirían).
  Toma prestada solo la hoja de estilos, leída del build porque el nombre lleva hash.

Recién en la fase 5, con los dos proyectos prerenderizando y declarando sus prefijos, la
variable `enable_prerender_routing` deja de tener sentido y se elimina. Ese es el momento
del default, no antes.

**Riesgo conocido para la fase 3:** `cursos` tiene al menos un componente que lee
`localStorage` durante el render (`pages/alumnos/clase/clase.jsx`). Es una ruta
autenticada que no se prerenderizaría, pero hay que auditar el resto con el mismo criterio
que se usó en `page`: los accesos a `window`/`document`/`localStorage` tienen que estar
dentro de `useEffect` o de handlers, nunca en el cuerpo del componente.

## Fuera de alcance

- `pdf` y `mp4` en el mapa de content-type. Hoy los PDFs de las formaciones se descargan
  en vez de abrirse en el navegador. Es una mejora real, pero cambia comportamiento
  visible en producción para los dos proyectos: va con su propia decisión.
- `s3_distribution_dev` usa el OAI de **producción**
  (`aws_cloudfront_origin_access_identity.origin_access_identity` en vez de `..._dev`), en
  las dos ramas. El recurso `_dev` se crea y no se usa. Bug preexistente, no se tocó.
