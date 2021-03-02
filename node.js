module.exports = {
	extends: [
		'./index.js',
	].map(require.resolve),
	env: {
		browser: false,
		node: true,
	},
	parserOptions: {
		sourceType: 'script',
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	rules: {
		'callback-return': ['error', ['cb', 'callback', 'next', 'done']],
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'off',
		'no-new-require': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-sync': ['warn', {
			allowAtRootLevel: false,
		}],
		'no-unsafe-optional-chaining': 'error',
	},
};
