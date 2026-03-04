const typescriptParser = require("@typescript-eslint/parser");
const nextPlugin = require("@next/eslint-plugin-next");

module.exports = [
  {
    files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];
