import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Build aparte para Node: compila la app a un bundle que corre fuera del navegador.
// Se emite como .mjs porque el package.json no declara "type": "module" y Node
// interpretaria un .js como CommonJS.
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: "src/entry-server.jsx",
    outDir: "dist-ssr",
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});
