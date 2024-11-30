// @ts-check

import eslint from '@eslint/js';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default tseslint.config({
  files: ['**/*.ts', '**/*.spec.ts'],
  extends: [eslint.configs.recommended, ...tseslint.configs.strict],
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020, // Allows modern ECMAScript features
      sourceType: 'module',
      project: './tsconfig.json', // Specify the path to your tsconfig.json file
      tsconfigRootDir: __dirname, // Set the root directory for tsconfig
    },
  },

  rules: {
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
  },
});
