const craConfig = require('react-scripts-ts/config/webpack.config.dev');
const {
  getTsLoader,
  getCssLoader,
  rewireCssModules,
  regexEquals,
  rewiredUtils: { compose }
} = require('@app/rewire/util');

module.exports = (baseConfig, env, defaultConfig) => {
  const cssLoader = getCssLoader(craConfig);
  const tsLoader = getTsLoader(craConfig);

  // remove builtin css-loader
  defaultConfig.module.rules = defaultConfig.module.rules
    .filter(rule => !regexEquals(rule.test, /\.css$/));

  // ts, css
  defaultConfig.module.rules.push(tsLoader, cssLoader);

  // ts
  delete tsLoader.include;
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return compose(rewireCssModules)(defaultConfig);
};
