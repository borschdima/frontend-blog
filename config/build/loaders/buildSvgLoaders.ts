export default function buildSvgLoaders() {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
}
