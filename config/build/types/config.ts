export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  public: string;
}

export interface BuildEnv {
  mode: BuildMode;
  analyze: boolean;
  port: number;
}

export interface BuildOptions {
  analyze: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  project: 'storybook' | 'frontend' | 'jest';
}
