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
  "no-unused-vars": [
    "warn",
    {
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_",
    },
  ],
};

const TYPESCRIPT_RULES = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
};

const COMMON_RULES = {
  // POSIBLE ERRORS
  "no-use-before-define": "error",
  "no-param-reassign": ["error", { props: true }],
  "no-self-compare": "error",
  "prefer-promise-reject-errors": "error",
  // BEST PRACTICES
  "prefer-arrow-callback": "warn",
  "no-unreachable": "warn",
  "class-methods-use-this": "warn",
  "no-extra-bind": "warn",
  "no-mixed-operators": "warn",
  "prefer-template": "warn",
  "no-console": ["warn", {
    allow: ["warn", "error"],
  }],
  "no-constant-condition": "warn",
  "no-nested-ternary": "warn",
};

const eslintConfig = [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      'src/assets/**',
    ],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
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
      ...COMMON_RULES,
    },
  },
];

export default eslintConfig;
