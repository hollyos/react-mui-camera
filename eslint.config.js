import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  {
    rules: {
      'prefer-const': 'error',
      semi: 'error',
      indent: 'error',
      quotes: ['error', 'double'],
      spaces: ['error', 2],
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.configs.recommended,
  eslintConfigPrettier,
]);
