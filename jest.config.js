module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/dont-cleanup-after-each',
    'jest-styled-components',
  ],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '\\.(jpg|png|svg|woff2)$': '<rootDir>/jest/file-mock.js',
    '\\.(css|scss)$': '<rootDir>/jest/style-mock.js',
  },
};
