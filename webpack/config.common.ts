import './types';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import webpack from 'webpack';
import * as paths from './paths';

// Common plugins
export const commonPlugin = [
  new HtmlWebpackPlugin({
    inject: 'body',
    template: paths.indexHtml,
    favicon: paths.favicon,
  }),
];

export const resolvePlugins: any = [
  // Get aliases from tsconfig.json
  new TsconfigPathsPlugin(),
];

// Common config
export const commonConfig: webpack.Configuration = {
  context: paths.root,
  resolve: {
    extensions: paths.extensions,
    plugins: resolvePlugins,
  },
  output: {
    path: paths.build,
  },
  module: {
    rules: [],
    wrappedContextCritical: true,
    strictExportPresence: true,
  },
  plugins: commonPlugin,
  performance: {
    hints: false,
  },
  optimization: {
    moduleIds: 'named', // better gzipped
    chunkIds: 'named',
  },
  stats: {
    modules: false,
    chunks: false,
    children: false,
    timings: false,
    version: false,
  },
};

export default commonConfig;
