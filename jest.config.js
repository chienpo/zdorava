/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const config = {
  coverageDirectory: '.coverage',
  clearMocks: true,
  testEnvironment: 'node',
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: [
    'jest-styled-components',
    `${__dirname}/config/setupTest.ts`,
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `${__dirname}/`,
  }),
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

module.exports = config;
