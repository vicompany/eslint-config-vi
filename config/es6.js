'use strict';

module.exports = {
	extends: 'vi/config/defaults',
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	rules: {
		// ECMAScript 6
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error', { before: true, after: true }],
		'constructor-super': 'error',
		'generator-star-spacing': ['error', 'after'],
		'no-class-assign': 'error',
		'no-confusing-arrow': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-new-symbol': 'error',
		'no-restricted-imports': 'off',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-var': 'error',
		'object-shorthand': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'off',
		'prefer-reflect': 'off',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': ['error', 'after']
	}
};
