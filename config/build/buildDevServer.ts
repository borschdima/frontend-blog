import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    hot: true,
    port,
    open: true,
    historyApiFallback: true,
    devMiddleware: { writeToDisk: true }, // let copy-webpack-plugin rewrite locales in public folder
  };
}
