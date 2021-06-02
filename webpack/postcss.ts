import flexBugsFixes from 'postcss-flexbugs-fixes';
import normalize from 'postcss-normalize';
import presetEnv from 'postcss-preset-env';

import { isDevelopment } from './env';

// TODO: Fix eslint for postcss config
export const postcssConfig = {
  syntax: 'postcss-scss',
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    presetEnv({
      stage: 2,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
    }),
    flexBugsFixes(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    normalize(),
  ],
  sourceMap: isDevelopment,
};
