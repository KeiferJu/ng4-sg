var webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'source-map-support'],
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    webpackServer: { noInfo: true },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    files: [
      { pattern: './karma.test.shim.js', watched: false }
    ],

    preprocessors: {
      './karma.test.shim.js': ['webpack']
    },

    reporters: ["mocha", "html", "tfs", "karma-remap-istanbul"],

    htmlReporter: {
      outputDir: 'reports',
      reportName: 'jasmine'
    },

    tfsReporter: {
      outputDir: 'reports/jasmine',
      outputFile: 'testresults.xml'
    },

    remapIstanbulReporter: {
      reports: {
        'cobertura': 'reports/coverage/cobertura.xml',
        'html': 'reports/coverage',
        'text': null
      }
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}
