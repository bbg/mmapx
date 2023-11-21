/**
 * BEGIN
 */

import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
  globalCss: {},
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
    },
  },
  staticCss: {
    css: [
      {
        properties: {
          bgColor: [
            "gray.200",
            "red.200",
            "orange.200",
            "amber.200",
            "yellow.200",
            "yellow.200",
            "green.200",
            "emerald.200",
            "teal.200",
            "cyan.200",
            "sky.200",
            "blue.200",
            "indigo.200",
            "violet.200",
            "purple.200",
            "fuchsia.200",
            "pink.200",
            "rose.200",
          ],
        },
      },
    ],
  },
});

/**
 * END
 */
