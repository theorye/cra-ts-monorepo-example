const { compose } = require('react-app-rewired');
const { rewireAllowDirectImportTs, rewireCssModules } = require('@app/rewire');

const {createLogger} = require('@app/rewire/util');

module.exports = {
  webpack: compose(
    rewireAllowDirectImportTs,
    rewireCssModules
  ),
  jest: (config, env) => {
    const cssModulesMapper = {
      "\\.(css|scss)$": "identity-obj-proxy"
    };

    Object.assign(config.moduleNameMapper, cssModulesMapper);

    return config;
  }
}
