import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import yaml from 'js-yaml';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, analyze, project }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/locales/**/*`,
          to: `${paths.public}/[path][name].json`,
          force: true,
          context: './src/',
          transform: {
            transformer: (content) => (
              Buffer.from(
                JSON.stringify(
                  yaml.load(content.toString('utf8'), {
                    schema: yaml.JSON_SCHEMA,
                  }),
                ),
                'utf8',
              )
            ),
            cache: true,
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      IS_DEV: isDev,
      API_URL: JSON.stringify(process.env.API_URL),
      PROJECT: JSON.stringify(project),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];

  if (isDev) plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
  if (analyze) plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));

  return plugins;
}
