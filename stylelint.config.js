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
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
  },
};

module.exports = config;
