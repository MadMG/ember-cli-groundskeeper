/* jshint node: true, sub: true */
'use strict';

var groundskeeper = require('broccoli-groundskeeper');

module.exports = {
  name: 'ember-cli-groundskeeper',

  included: function (app) {
    this._super.included.apply(this, arguments);
    this.app = app;
    this.options = app.options['groundskeeper'];
  },

  postprocessTree: function (type, tree) {
    if (this.app.env === 'production' && type === 'all') {
      tree = groundskeeper(tree, this.options);
    }
    return tree;
  }
};
