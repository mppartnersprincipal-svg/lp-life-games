import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

/**
 * No dev/preview, serve /impressao-3d como impressao-3d.html.
 * Em produção (Vercel), quem faz isso é o "cleanUrls" do vercel.json.
 */
function cleanUrlImpressao3d(): Plugin {
  const rewrite = (req: { url?: string }) => {
    if (req.url && /^\/impressao-3d\/?(\?.*)?$/.test(req.url)) {
      req.url = "/impressao-3d.html";
    }
  };
  return {
    name: "clean-url-impressao-3d",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cleanUrlImpressao3d()],
  build: {
    rollupOptions: {
      // MPA: uma entrada HTML por página (SEO/OG próprios de cada landing)
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        impressao3d: fileURLToPath(new URL("./impressao-3d.html", import.meta.url)),
      },
    },
  },
});
