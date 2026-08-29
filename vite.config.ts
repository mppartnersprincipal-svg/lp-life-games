import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// Páginas secundárias (MPA): slug → arquivo HTML na raiz.
const PAGES = ["impressao-3d", "videogame-retro"] as const;

/**
 * No dev/preview, serve /impressao-3d e /videogame-retro como os .html
 * correspondentes. Em produção (Vercel), quem faz isso é o "cleanUrls".
 */
function cleanUrlPages(): Plugin {
  const rewrite = (req: { url?: string }) => {
    if (!req.url) return;
    for (const slug of PAGES) {
      if (new RegExp(`^/${slug}/?(\\?.*)?$`).test(req.url)) {
        req.url = `/${slug}.html`;
        return;
      }
    }
  };
  return {
    name: "clean-url-pages",
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
  plugins: [react(), tailwindcss(), cleanUrlPages()],
  build: {
    rollupOptions: {
      // MPA: uma entrada HTML por página (SEO/OG próprios de cada landing)
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        impressao3d: fileURLToPath(new URL("./impressao-3d.html", import.meta.url)),
        videogameRetro: fileURLToPath(new URL("./videogame-retro.html", import.meta.url)),
      },
    },
  },
});
