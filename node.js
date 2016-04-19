'use strict';

var path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		browser: false,
		node: true
	},
	parserOptions: {
		sourceType: 'script'
	},
	rules: {
		// Node.js
		'callback-return': ['error', ['cb', 'callback', 'next', 'done']],
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-mixed-requires': 'off',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-restricted-modules': 'off',
		'no-sync': 'warn'
	}
};
