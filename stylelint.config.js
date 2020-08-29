/** @type Partial<import('stylelint').Configuration> */
const config = {
  extends: [
    'stylelint-config-standard',
    // "stylelint-config-rational-order",
    'stylelint-config-rational-order',
    // ...
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  rules: {
    // From stylelint-config-standard
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: [
          '/^[A-Z].*$/',
          '/^(\\D+|[a-z])+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/',
        ],
      },
    ],
    'function-name-case': ['lower', { ignoreFunctions: '/^class.*$/' }],
    'unit-no-unknown': [true, { ignoreUnits: ['`', 'px`'] }],
  },
};

module.exports = config;
