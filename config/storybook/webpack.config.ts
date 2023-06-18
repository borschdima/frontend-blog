import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
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
    public: path.resolve(__dirname, '..', '..', 'public'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];
  // eslint-disable-next-line
  config!.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module?.rules?.push(buildSvgLoaders(), buildCssLoaders(true));

  config.plugins?.push(new DefinePlugin({
    IS_DEV: true,
    API_URL: JSON.stringify(process.env.API_URL),
  }));

  return config;
};
