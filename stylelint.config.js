module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    // "stylelint-config-rational-order",
    'stylelint-config-rational-order',
    // ...
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
};
