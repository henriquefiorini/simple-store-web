module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',

    'react/jsx-filename-extension': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['tron'] }],
  },
};
