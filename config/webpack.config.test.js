'use strict';

var webpack = require('webpack');
var globals = require('./globals');
var rules = require('./rules');
var plugins = require('./plugins');

module.exports = {
  module: {
    rules: [
      rules.istanbul,
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: { module: 'commonjs', sourceMap: false, inlineSourceMap: true }
      },
      { test: /\.ts$/, loaders: ['angular2-template-loader', 'angular2-router-loader'] },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader?sourceMap'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'null-loader' }
    ]
  },

  plugins: plugins.commonPlugins,
  resolve: globals.resolve
};
