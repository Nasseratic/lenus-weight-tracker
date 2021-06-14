import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    brotliSize: false,
  },
  plugins: [
    tsconfigPaths(),
    reactRefresh(),
    VitePWA({
      workbox: {
        additionalManifestEntries: [
          // eslint-disable-next-line unicorn/no-null
          { url: "https://rsms.me/inter/inter.css", revision: null },
        ],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: undefined,
      },
      manifest: {
        name: "Lenus",
        short_name: "Lenus",
        theme_color: "#f4f3f4",
        icons: [
          {
            src: "/android-chrome-270x270.png",
            sizes: "270x270",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    macrosPlugin(),
  ],
});
