module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "react/jsx-props-no-spreading": "off",
    "no-console": "off",
    "jsx-a11y/label-has-associated-control": "off"
  },
};
