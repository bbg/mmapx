/**
 * BEGIN
 */

import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import million from "million/compiler";

export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
  ],
});

/**
 * END
 */
