'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var plugins = require('./plugins');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: '[name].bundle.js'
  },

  devtool: 'inline-source-map',

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  module: {
    rules: [
      {
        test: /\.ts$/, loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader']
      }
    ]
  },

  plugins: [
    plugins.commonChunksPlugin(),
    plugins.environmentPlugin('environment.dev.ts')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
