'use strict';

var path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	env: {
		browser: false,
		node: true
	},
	rules: {
		// Node.js
		'callback-return': [2, ['cb', 'callback', 'next', 'done']],
		'global-require': 2,
		'handle-callback-err': 2,
		'no-mixed-requires': 0,
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-process-env': 2,
		'no-process-exit': 2,
		'no-restricted-modules': 0,
		'no-sync': 1
	}
};
