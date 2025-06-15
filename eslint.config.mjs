import { FlatCompat } from "@eslint/eslintrc";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const IMPORT_RULES = {
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
};

const TYPESCRIPT_RULES = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
};

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      ...IMPORT_RULES,
      ...TYPESCRIPT_RULES,
    },
  },
];

export default eslintConfig;
