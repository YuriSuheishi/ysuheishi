import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {
      languageOptions: { 
        globals: globals.browser, 
      }
    },
    {
      rules: {
          semi: "error",
          "prefer-const": "error"
      }
    },
];