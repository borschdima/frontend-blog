import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const mode = env.mode || 'development';
  const analyze = !!env.analyze;
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    analyze,
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
