// a bit of a hack but exporting like this ensures we don't get
// the lib exported with `.default` in the browser
module.exports = require('./backpack').default;
