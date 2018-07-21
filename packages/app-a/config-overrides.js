const { compose } = require('react-app-rewired');
const { rewireAllowDirectImportTs } = require('@app/rewire');

module.exports = compose(rewireAllowDirectImportTs);
