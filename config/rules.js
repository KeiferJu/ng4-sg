'use strict';

var globals = require('./globals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.tslint = {
  enforce: 'pre',
  test: /^((?!(ngfactory|shim)).)*ts$/,
  loader: 'tslint-loader'
};

exports.html = {
  test: /\.html$/,
  loader: 'html-loader'
};

exports.globalSass = {
  test: /\.scss$/,
  exclude: globals.ApplicationDirectory,
  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!resolve-url-loader?sourceMap!sass-loader?sourceMap' })
};

exports.applicationSass = {
  test: /\.scss$/,
  include: globals.ApplicationDirectory,
  loaders: ['raw-loader', 'sass-loader?sourceMap']
};

exports.globalCss = {
  test: /\.css$/,
  exclude: globals.ApplicationDirectory,
  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap'})
};

exports.applicationCss = {
  test: /\.css$/,
  include: globals.ApplicationDirectory,
  loader: 'raw-loader'
};

exports.assets = {
  test: /\.(png|jpe?g|gif|svg|ttf|eot|ico)$/,
  loader: 'file-loader?name=../assets/[name].[ext]'
};

exports.woff = {
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: "url-loader?name=../assets/[name].[ext]&limit=10000&minetype=application/font-woff"
};

exports.jQueryForBootstrap = {
  test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
  loader: 'imports-loader?jQuery=jquery'
};

exports.istanbul = {
  enforce: 'post',
  test: /\.ts$/,
  loader: 'istanbul-instrumenter-loader',
  include: globals.SourceDirectory,
  exclude: [
    /\.spec\.ts$/,
    /node_modules/
  ]
};
