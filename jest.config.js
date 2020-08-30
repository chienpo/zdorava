/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

/** @type import('@jest/types').Config.InitialOptions */
const config = {
  coverageDirectory: '.coverage',
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: ['jest-styled-components', `${__dirname}/setup-test.ts`],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `${__dirname}/`,
  }),
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

module.exports = config;
