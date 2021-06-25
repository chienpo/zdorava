import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';
import DotenvPlugin from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

import { commonConfig } from './config.common';
import * as paths from './paths';
import { createRules } from './rules';

// Production plugins
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const productionPlugins: Plugin[] | any = [
  new DotenvPlugin({
    path: paths.env,
    safe: paths.envRef,
    expand: true,
    systemvars: true,
  }),
  new CleanPlugin(),
  new webpack.ProgressPlugin({
    activeModules: false,
    entries: true,
  }),
  new webpack.SourceMapDevToolPlugin({
    noSources: true,
  }),
  new MiniCssExtractPlugin({
    // TODO: Check
    filename: paths.outputProd.css,
    chunkFilename: paths.outputProd.cssChunks,
  }),
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testModules = (names: string[]) => (chunk: any) =>
  Boolean(chunk.resource) &&
  names.some((name) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    chunk.resource.startsWith(`${paths.root}/node_modules/${name}/`)
  );

// Production config
export const productionConfig = merge(commonConfig, {
  mode: 'production',
  entry: {
    main: paths.entryMain,
  },
  bail: true,
  devtool: false,
  output: {
    publicPath: '/',
    filename: paths.outputProd.js,
    chunkFilename: paths.outputProd.jsChunks,
  },
  module: {
    rules: createRules(),
  },
  plugins: productionPlugins,
  optimization: {
    noEmitOnErrors: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxAsyncRequests: 16,
      maxInitialRequests: 6,
      cacheGroups: {
        polyfills: {
          test: testModules(['core-js']),
          enforce: true,
          reuseExistingChunk: true,
        },
        react: {
          test: testModules(['react', 'react-dom', 'scheduler']),
          name: 'react',
          enforce: true,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      () => ({
        cache: false,
        sourceMap: false,
        extractComments: false,
        terserOptions: {
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            safari10: true,
          },
          compress: {
            comparisons: false,
          },
        },
      }),
      new CssMinimizerPlugin({
        test: paths.cssPattern,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              normalizeUnicode: false,
            },
          ],
        },
      }),
    ],
  },
});

export default productionConfig;
