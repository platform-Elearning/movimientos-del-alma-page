// Punto de entrada para renderizar en Node durante el build.
// StaticRouter es el equivalente de BrowserRouter sin navegador: recibe la URL
// como dato en vez de leerla de window.location.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRouter from "./router/AppRouter.jsx";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRouter />
    </StaticRouter>
  );
}
