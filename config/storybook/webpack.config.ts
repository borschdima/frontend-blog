import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import buildCssLoaders from '../build/loaders/buildCssLoaders';
import buildSvgLoaders from '../build/loaders/buildSvgLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  // @ts-ignore
  // eslint-disable-next-line
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push(buildSvgLoaders(), buildCssLoaders(true));

  return config;
};
