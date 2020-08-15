import { lazy } from 'react';

interface DefaultModule {
  default: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModuleEntries = any;

type Module = DefaultModule | ModuleEntries;

export const lazyLib = (
  promisedLibImport: () => Promise<Module>,
  compPathStr?: string
) =>
  lazy(() =>
    promisedLibImport().then(module => {
      if (compPathStr) {
        const compPathParts = compPathStr.split('.');

        const object = compPathParts.reduce((acc, currVal: string) => {
          return acc ? acc[currVal] : null;
        }, module);

        return {
          default: object,
        };
      }
      return module;
    })
  );
