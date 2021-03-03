module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  plugins: ['react', 'prettier', '@typescript-eslint'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb-typescript',
    'prettier',
  ],
  rules: {
    // Use TypeScript's types for component props instead
    'react/prop-types': 'off',
    // No need to import React when using NextJS
    'react/react-in-jsx-scope': 'off',
    // NextJS's Link does not need an href on a tags
    'jsx-a11y/anchor-is-valid': 'off',
    // Who wants unused vars?
    '@typescript-eslint/no-unused-vars': ['error'],
    // Support multiple OS
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
