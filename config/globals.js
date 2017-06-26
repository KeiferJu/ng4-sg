'use strict';

var path = require('path');

const DistDirectory = path.resolve(__dirname, '../dist');
const SourceDirectory = path.resolve(__dirname, '../src');
const ApplicationDirectory = path.resolve(__dirname, '../src/app');
const EnvironmentDirectory = path.resolve(__dirname, '../src/environments');

exports.DistDirectory = DistDirectory;
exports.SourceDirectory = SourceDirectory;
exports.ApplicationDirectory = ApplicationDirectory;
exports.EnvironmentDirectory = EnvironmentDirectory;


exports.output = {
  path: DistDirectory,
  filename: 'scripts/[name].[chunkhash:6].bundle.js'
};

exports.resolve = {
  modules: [
    'node_modules',
    SourceDirectory
  ],
  extensions: ['.ts', '.js']
};
