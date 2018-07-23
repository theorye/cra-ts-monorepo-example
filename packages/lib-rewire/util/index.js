const rewiredUtils = require('./rewired');
const rewireCssModules = require('react-app-rewire-css-modules');

/**
 * USAGE: compose(createLogger('/tmp/webpack.config.json'), ...)
 * @param {string} outputPath
 */
const createLogger = outputPath => (config, _env) => {
  const fs = require('fs');
  const replacer = (_, v) => (v instanceof RegExp ? v.toString() : v);
  fs.writeFileSync(outputPath, JSON.stringify(config, replacer, 2));
  return config;
};

const regexEquals = (x, y) => x.toString() === y.toString();

const getLoaderFactory = regex => config => rewiredUtils.getLoader(
  config.module.rules,
  rule => rule.test && regexEquals(rule.test, regex),
);

const getTsLoader = getLoaderFactory(/\.(ts|tsx)$/);
const getCssLoader = getLoaderFactory(/\.css$/);

module.exports = {
  rewiredUtils,
  createLogger,
  regexEquals,
  getTsLoader,
  getCssLoader,
  rewireCssModules,
}