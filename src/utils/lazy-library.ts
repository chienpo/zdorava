import { lazy } from 'react';

interface DefaultModule {
  default: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModuleEntries = any;

type Module = DefaultModule | ModuleEntries;

export const lazyLibrary = (
  promisedLibraryImport: () => Promise<Module>,
  compPathString?: string
) =>
  lazy(() =>
    promisedLibraryImport().then((module) => {
      if (compPathString) {
        const compPathParts = compPathString.split('.');

        // eslint-disable-next-line unicorn/no-reduce
        const object = compPathParts.reduce(
          (accumulator, currentValue: string) => {
            return accumulator ? accumulator[currentValue] : null;
          },
          module
        );

        return {
          default: object,
        };
      }
      return module;
    })
  );
