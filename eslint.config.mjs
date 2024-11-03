module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    "consistent-return": "off",
    "default-case": "off",
    "no-await-in-loop": "off",
    "no-console": "off",
    semi: ["error", "never"],

    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",

    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",

    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
