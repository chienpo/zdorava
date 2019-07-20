module.exports = {
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
    'jest-styled-components',
  ],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '\\.(jpg|png|svg|woff2)$': '<rootDir>/jest/file-mock.js',
    '\\.(css|scss)$': '<rootDir>/jest/style-mock.js',
  },
};
