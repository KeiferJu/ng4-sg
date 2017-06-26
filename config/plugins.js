'use strict';

var webpack = require('webpack');
var path = require('path');
var globals = require('./globals');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

exports.commonPlugins = [
  new ProgressPlugin(),
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)@angular/,
    globals.SourceDirectory
  ),
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    favicon: 'src/favicon.ico'
  })
];

exports.prodPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    beautify: false,
    comments: false,
    sourceMap: true
  })
];

exports.commonChunksPlugin = function() {
  return new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'] });
};

exports.environmentPlugin = function(fileName) {
  return new webpack.NormalModuleReplacementPlugin(
    new RegExp(path.resolve(globals.EnvironmentDirectory, 'environment.ts')
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')),
    path.resolve(globals.EnvironmentDirectory, fileName)
  );
};
