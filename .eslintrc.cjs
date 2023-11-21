/**
 * BEGIN
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "panda.config.ts",
    "postcss.config.cjs",
    "types.d.ts"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
  },
};

/**
 * END
 */
