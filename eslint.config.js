import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint, { plugin } from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),

  {
    rules: {
      'no-console': 'warn', // Add custom rules here
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      // Additional rules can be added here
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: [prettier],
  },
];
