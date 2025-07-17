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
  'no-use-before-define': 'error',
  'no-param-reassign': ['error', { props: true }],
  'no-self-compare': 'error',
  'prefer-promise-reject-errors': 'error',
  // BEST PRACTICES
  'prefer-arrow-callback': 'warn',
  'no-unused-vars': ['warn', {
    varsIgnorePattern: '^_',
    argsIgnorePattern: '^_',
  }],
  'no-unreachable': 'warn',
  'class-methods-use-this': 'warn',
  'no-extra-bind': 'warn',
  'no-mixed-operators': 'warn',
  'prefer-template': 'warn',
  'no-console': ['warn', {
    allow: ['warn', 'error'],
  }],
  'no-constant-condition': 'warn',
  'no-nested-ternary': 'warn',
  // STYLE
  quotes: ['warn', 'single', {
    avoidEscape: true,
  }],
  'quote-props': ['warn', 'as-needed'],
  semi: ['warn', 'always'],
  'max-len': ['warn', {
    code: 100,
    ignoreTrailingComments: true,
    ignoreComments: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true,
  }],
  camelcase: ['warn', {
    properties: 'never',
    ignoreDestructuring: true,
    ignoreImports: true,
    ignoreGlobals: true,
  }],
  'operator-linebreak': ['warn', 'after', {
    overrides: { '?': 'before', ':': 'before' },
  }],
  'comma-dangle': ['warn', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],
  'prefer-destructuring': ['warn', {
    array: false,
    object: true,
  }],
  'no-trailing-spaces': 'warn',
  'no-multiple-empty-lines': 'warn',
  'object-curly-spacing': ['warn', 'always', {
    arraysInObjects: true,
    objectsInObjects: true,
  }],
  'spaced-comment': 'warn',
  'space-in-parens': 'warn',
  'eol-last': 'warn',
  indent: ['warn', 2, {
    SwitchCase: 1,
  }],
  'space-infix-ops': 'warn',
  'padded-blocks': ['warn', 'never'],
  'space-before-blocks': 'warn',
  'arrow-spacing': 'warn',
  'no-multi-spaces': ['warn'],
  'no-empty': 'warn',
  'lines-between-class-members': 'warn',
  'space-before-function-paren': ['warn', {
    named: 'never',
    anonymous: 'always',
  }],
  'key-spacing': 'warn',
  'no-useless-escape': 'warn',
  'no-useless-return': 'warn',
  'block-spacing': 'warn',
  'comma-spacing': ['warn', {
    before: false,
    after: true,
  }],
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
      ...COMMON_RULES,
    },
  },
];

export default eslintConfig;
