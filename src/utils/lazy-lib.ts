import { lazy } from 'react';

export const lazyLib = (
  promisedLibImport: () => Promise<any>,
  compPathStr: string
) =>
  lazy(() =>
    promisedLibImport().then((module: any) => {
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
