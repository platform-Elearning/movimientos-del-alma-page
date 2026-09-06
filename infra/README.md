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

- `movimientos-del-alma-page`: `spa_prefixes = []`. Todo el sitio es contenido.
- `movimientos-del-alma-cursos`: declararía `/admin`, `/alumnos`, `/profesores` y las
  rutas de sesión, y prerenderizaría sus páginas públicas.

El match es contra `prefijo + "/"` además de la igualdad exacta, para que `/admin` no
capture `/administracion`. Está cubierto en el test.

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
| 1 | `page`: prerender + función. Catch-all intacto. | listo en local, falta aplicar |
| 2 | Verificar `page` en producción con los `curl` de abajo | pendiente |
| 3 | `cursos`: auditar SSR-safety, prerender de rutas públicas, declarar `spa_prefixes` | pendiente |
| 4 | Catch-all → 404 real en ambos. `enable_prerender_routing` pasa a `true` y se elimina | pendiente |

En la fase 4 la variable deja de tener sentido: si todos los proyectos prerenderizan y
declaran sus prefijos, la función es siempre correcta y el flag sobra. Ese es el momento
de que el default sea `true`, no antes.

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
