module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'cypress/globals': 'true',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'cypress'
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
