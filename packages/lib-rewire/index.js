const { paths, getLoader } = require('react-app-rewired');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rewireCssModules = require('react-app-rewire-css-modules');

/**
 * USAGE: compose(createLogger('/tmp/webpack.config.json'), ...)
 * @param {string} outputPath
 */
const createLogger = (outputPath) => (config, _env) => {
    const fs = require('fs');
    const replacer = (_, v) => v instanceof RegExp ? v.toString() : v;
    fs.writeFileSync(outputPath, JSON.stringify(config, replacer, 2));
    return config;
  }

const regexEquals = (x, y) => x.toString() === y.toString();

function rewireAllowDirectImportTs(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule => rule.test && regexEquals(rule.test, /\.(ts|tsx)$/)
  );

  const plugins = [
    // new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    new TsconfigPathsPlugin({ configFile: paths.appTsConfig }),
  ];

  // mutations
  delete tsLoader.include;
  config.resolve.plugins = plugins;

  return config;
}

module.exports = {
  createLogger,
  rewireAllowDirectImportTs,
  rewireCssModules,
};
