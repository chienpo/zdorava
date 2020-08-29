const parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: './',
  extraFileExtensions: ['.mdx'],
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions,
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  overrides: [
    {
      files: ['.storybook/**/*.ts', 'webpack/**/*.ts', '**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/**/*.stories.ts', 'src/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './*.js',
          'webpack/**/*.ts',
          'src/**/*.test.js',
          'src/**/*.test.ts',
          'src/**/*.stories.ts',
          'src/**/*.stories.tsx',
          'src/**/*.stories.mdx',
          '.storybook/*.ts',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
      'SequenceExpression',
    ],
    'max-len': [
      'warn',
      {
        code: 80, // prettier default
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // TODO: Check, fix and move to overrides rules if it's nesessary
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': 'off', // optional props without defaults
    'react/forbid-prop-types': 'warn',
    'quote-props': ['warn', 'as-needed', { numbers: true }],
    indent: 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
  },
};
