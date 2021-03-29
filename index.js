module.exports = {
	extends: 'airbnb-base',

	root: true,

	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},

	env: {
		jest: true,
		node: true,
		browser: true,
	},
	rules: {
		'linebreak-style': 'off',
		'max-len': ['error', 120, 4, {
			ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true,
		}],
		'no-tabs': 'off',
		'no-prototype-builtins': 'off',
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		indent: ['error', 'tab', {
			SwitchCase: 1,
		}],
		semi: ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
	},
};
