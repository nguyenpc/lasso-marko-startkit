require('./style.less');

module.exports = function() {
  var util = require('../utils');
  util.removeClassesStartedWith(document.body, 'theme-');
  util.addClass(document.body, 'theme-normal');
};
