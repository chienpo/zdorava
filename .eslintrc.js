module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'react-hooks', 'filenames'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['src'],
      },
      typescript: {},
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/**/*.test.js', 'src/**/*.test.ts'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': 'off', // optional props without defaults
    'react/forbid-prop-types': 'warn',
    'quote-props': ['warn', 'as-needed', { numbers: true }],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'filenames/match-exported': ['error', 'kebab'],
    'filenames/match-regex': [
      'error',
      '^[a-z]+(?:-[a-z0-9]+)*(?:.[a-z]+)*$',
      false,
    ],
    indent: 'off',

    // TypeScript
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
};
