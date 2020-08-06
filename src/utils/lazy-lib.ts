import { lazy } from 'react';

export const lazyLib = (
  promisedLibImport: () => Promise<{}>,
  compPathStr: string
) =>
  lazy(() =>
    promisedLibImport().then((module: {}) => {
      const compPathParts = compPathStr.split('.');

      const object = compPathParts.reduce((acc: any, currVal: string) => {
        return acc ? acc[currVal] : null;
      }, module);

      return {
        default: object,
      };
    })
  );

// eslint-disable-next-line import/no-default-export
export default lazyLib;
