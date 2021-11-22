'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/demo')(app);
  require('./router/home')(app);
};
