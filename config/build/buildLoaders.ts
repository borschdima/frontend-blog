import webpack from 'webpack';

import { BuildOptions } from './types/config';

import buildCssLoaders from './loaders/buildCssLoaders';
import buildSvgLoaders from './loaders/buildSvgLoaders';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoaders = buildSvgLoaders();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoaders = buildCssLoaders(isDev);

  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svgLoaders,
    babelLoader,
    typescriptLoader,
    cssLoaders,
  ];
}
