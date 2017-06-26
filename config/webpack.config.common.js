'use strict';

var webpack = require('webpack');
var globals = require('./globals');
var rules = require('./rules');
var plugins = require('./plugins');

module.exports = {
  output: globals.output,
  resolve: globals.resolve,

  module: {
    rules: [
      rules.tslint,
      rules.html,
      rules.globalSass,
      rules.applicationSass,
      rules.globalCss,
      rules.applicationCss,
      rules.assets,
      rules.woff,
      rules.jQueryForBootstrap
    ]
  },

  plugins: plugins.commonPlugins
};
