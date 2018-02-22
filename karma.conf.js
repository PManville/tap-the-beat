var webpack = require('webpack');
var webpackConfig = require("./webpack.config");

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
			// 'node_modules/es6-promise/dist/es6-promise.js',
			// 'node_modules/babel-polyfill/dist/polyfill.js',
			'src/**/*.test.ts'
    ],
		plugins: [
			'karma-*'
		],
    preprocessors: {
			'src/**/*.test.ts': ['webpack'],
			'src/**/*.test.tsx': ['webpack']
    },
    reporters: ['mocha'],
		webpack: {
			module: webpackConfig.module,
			resolve: webpackConfig.resolve
		},
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
