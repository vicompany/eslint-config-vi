'use strict';

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	rules: {
		// Possible Errors
		'comma-dangle': [2, 'never'],
		'no-cond-assign': 2,
		'no-console': 2,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': 2,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-unreachable': 2,
		'no-unexpected-multiline': 2,
		'use-isnan': 2,
		'valid-jsdoc': 0,
		'valid-typeof': 2,

		// Best Practices
		'accessor-pairs': 2,
		'array-callback-return': 2,
		'block-scoped-var': 2,
		'complexity': 2,
		'consistent-return': 2,
		'curly': 2,
		'default-case': 2,
		'dot-notation': 2,
		'dot-location': [2, 'property'],
		'eqeqeq': 2,
		'guard-for-in': 2,
		'no-alert': 2,
		'no-caller': 2,
		'no-case-declarations': 2,
		'no-div-regex': 2,
		'no-else-return': 2,
		'no-empty-function': 2,
		'no-empty-pattern': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-label': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-implicit-coercion': 2,
		'no-implicit-globals': 2,
		'no-implied-eval': 2,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-loop-func': 2,
		'no-magic-numbers': [2, { ignoreArrayIndexes: true, enforceConst: true }],
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-native-reassign': 2,
		'no-new': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-return-assign': [2, 'always'],
		'no-script-url': 2,
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-unmodified-loop-condition': 2,
		'no-unused-expressions': 2,
		'no-unused-labels': 2,
		'no-useless-call': 2,
		'no-useless-concat': 2,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-with': 2,
		'radix': 2,
		'vars-on-top': 2,
		'wrap-iife': [2, 'inside'],
		'yoda': 2,

		// Strict Mode
		'strict': [2, 'safe'],

		// Variables
		'init-declarations': 0,
		'no-catch-shadow': 0,
		'no-delete-var': 2,
		'no-label-var': 2,
		'no-restricted-globals': [2, 'event'],
		'no-shadow': 2,
		'no-shadow-restricted-names': 2,
		'no-undef': [2, { typeof: true }],
		'no-undef-init': 2,
		'no-undefined': 2,
		'no-unused-vars': 2,
		'no-use-before-define': [2, 'nofunc'],

		// Node.js
		'callback-return': [2, ['cb', 'callback', 'next', 'done']],
		'global-require': 2,
		'handle-callback-err': 2,
		'no-mixed-requires': [2, { grouping: true, allowCall: true }],
		'no-new-require': 2,
		'no-path-concat': 2,
		'no-process-env': 2,
		'no-process-exit': 2,
		'no-restricted-modules': 0,
		'no-sync': 2,

		// Stylistic Issues
		'array-bracket-spacing': [2, 'never'],
		'block-spacing': 2,
		'brace-style': [2, '1tbs', { allowSingleLine: false }],
		'camelcase': [2, { properties: 'always' }],
		'comma-spacing': [2, { before: false, after: true }],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'eol-last': 2,
		'func-names': 0,
		'func-style': [2, 'declaration', { allowArrowFunctions: true }],
		'id-blacklist': 1,
		'id-length': 0,
		'id-match': 0,
		'indent': [2, 'tab', { SwitchCase: 1 }],
		'jsx-quotes': 2,
		'key-spacing': [2, { beforeColon: false, afterColon: true }],
		'keyword-spacing': 2,
		'linebreak-style': 0,
		'lines-around-comment': 0,
		'max-depth': [2, 4],
		'max-len': [2, 100, 2, { 'ignoreUrls': true, 'ignoreComments': false }],
		'max-nested-callbacks': [1, 4],
		'max-params': [2, 5],
		'max-statements': 0,
		'new-cap': [2, { newIsCap: true, capIsNew: true }],
		'new-parens': 2,
		'newline-after-var': 2,
		'newline-before-return': 2,
		'newline-per-chained-call': 2,
		'no-array-constructor': 2,
		'no-bitwise': 2,
		'no-continue': 2,
		'no-inline-comments': 0,
		'no-lonely-if': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-multiple-empty-lines': [2, { max: 1 }],
		'no-negated-condition': 2,
		'no-nested-ternary': 2,
		'no-new-object': 2,
		'no-plusplus': 0,
		'no-restricted-syntax': [2, 'WithStatement'],
		'no-spaced-func': 2,
		'no-ternary': 0,
		'no-trailing-spaces': 2,
		'no-underscore-dangle': 2,
		'no-unneeded-ternary': 2,
		'no-whitespace-before-property': 2,
		'object-curly-spacing': [2, 'always'],
		'one-var': [2, 'never'],
		'one-var-declaration-per-line': 2,
		'operator-assignment': [2, 'always'],
		'operator-linebreak': [2, 'after'],
		'padded-blocks': [2, 'never'],
		'quote-props': [2, 'consistent-as-needed'],
		'quotes': [2, 'single'],
		'require-jsdoc': 0,
		'semi': [2, 'always'],
		'semi-spacing': 2,
		'sort-imports': 0,
		'sort-vars': 0,
		'space-before-blocks': [2, 'always'],
		'space-before-function-paren': [2, 'never'],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': 2,
		'space-unary-ops': 2,
		'spaced-comment': [2, 'always', { markers: ['!'] }],
		'wrap-regex': 0,

		// ECMAScript 6
		'arrow-body-style': [2, 'as-needed'],
		'arrow-parens': [2, 'as-needed'],
		'arrow-spacing': [2, { before: true, after: true }],
		'constructor-super': 2,
		'generator-star-spacing': [2, 'after'],
		'no-class-assign': 2,
		'no-confusing-arrow': 2,
		'no-const-assign': 2,
		'no-dupe-class-members': 2,
		'no-new-symbol': 2,
		'no-restricted-imports': 0,
		'no-this-before-super': 2,
		'no-useless-constructor': 2,
		'no-var': 2,
		'object-shorthand': [2, 'always'],
		'prefer-arrow-callback': 2,
		'prefer-const': 0,
		'prefer-reflect': 0,
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		'prefer-template': 2,
		'require-yield': 2,
		'template-curly-spacing': 2,
		'yield-star-spacing': [2, 'after']
	}
};
