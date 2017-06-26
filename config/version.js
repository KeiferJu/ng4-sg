'use strict';

var path = require('path');
var replace = require('replace-in-file');
var globals = require('./globals');
var pjson = require('../package.json');

const options = {
  files: [
    path.resolve(globals.EnvironmentDirectory, 'environment.ts'),
    path.resolve(globals.EnvironmentDirectory, 'environment.*.ts')
  ],
  replace: /provide: 'version', useValue: '(.+)'/g,
  with: 'provide: \'version\', useValue: \'' + pjson.version + '\'',
  allowEmptyPaths: false
};

try {
  let changedFiles = replace.sync(options);
  console.log('Modified files:', changedFiles.join(', '));
}
catch (error) {
  console.error('Error occurred:', error);
}
