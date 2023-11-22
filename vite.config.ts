/**
 * BEGIN
 */

import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import million from "million/compiler";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "MMapx",
        short_name: "MMapx",
        description: "Mindmap creation board",
        theme_color: "#ffffff",
        display: "standalone",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

/**
 * END
 */
