'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var plugins = require('./plugins');

var config = webpackMerge(commonConfig, {
  devtool: 'source-map',

  entry: {
    'app.aot': './src/main.aot.ts'
  },

  module: {
    rules: [
      { test: /\.ts$/, loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        'angular2-router-loader?aot=true&genDir=aot/src/app'] }
    ]
  },

  plugins: plugins.prodPlugins
});

module.exports = config;
