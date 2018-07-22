const { compose } = require('react-app-rewired');
const { rewireAllowDirectImportTs, rewireCssModules } = require('@app/rewire');

module.exports = compose(
  rewireAllowDirectImportTs,
  rewireCssModules
);
