module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'lates',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', 'jsx', 'tsx'] }],
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'object-curly-newline': [2, { consistent: true }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-redeclare': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
    'max-len': [
      'error',
      { code: 120, ignoreTrailingComments: true, ignoreComments: true, ignoreStrings: true },
    ],
  },
  globals: {
    IS_DEV: true,
  },
};
