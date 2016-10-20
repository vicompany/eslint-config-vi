module.exports = {
	env: {
		browser: true
	},
	rules: {
		// Possible Errors
		'comma-dangle': ['error', 'never'],
		'no-cond-assign': 'error',
		'no-console': 'warn',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'warn',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': ['error', 'functions'],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-obj-calls': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-jsdoc': 'off',
		'valid-typeof': 'error',

		// Best Practices
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'warn',
		'complexity': ['off', 11],
		'consistent-return': 'error',
		'curly': 'error',
		'default-case': 'error',
		'dot-notation': ['error', { allowKeywords: true }],
		'dot-location': 'off',
		'eqeqeq': 'error',
		'guard-for-in': 'error',
		'no-alert': 'warn',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'off',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'off',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': 'off',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'radix': 'error',
		'vars-on-top': 'error',
		'wrap-iife': ['error', 'outside'],
		'yoda': 'error',

		// Strict Mode
		'strict': ['error', 'safe'],

		// Variables
		'init-declarations': 'off',
		'no-catch-shadow': 'off',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': 'off',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-unused-vars': ['error', { args: 'none' }],
		'no-use-before-define': 'error',

		// Stylistic Issues
		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		'camelcase': ['error', { properties: 'always' }],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'eol-last': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error', { includeCommonJSModuleExports: false }],
		'func-names': 'off',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'id-blacklist': 'warn',
		'id-length': 'off',
		'id-match': 'off',
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'keyword-spacing': 'error',
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'lines-around-directive': ['error', 'always'],
		'max-depth': ['error', 4],
		'max-len': ['error', 80, 4, { ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
		'max-lines': 'off',
		'max-nested-callbacks': ['warn', 4],
		'max-params': ['error', 5],
		'max-statements': 'off',
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-ternary': 'off',
		'new-cap': ['error', { newIsCap: true, capIsNew: true }],
		'new-parens': 'error',
		'newline-after-var': 'error',
		'newline-before-return': 'error',
		'newline-per-chained-call': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': ['error', 'WithStatement'],
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true }],
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': 'off',
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
		'one-var': ['error', { var: 'always', let: 'never', const: 'never' }],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': 'off',
		'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
		'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single'],
		'require-jsdoc': 'off',
		'semi': ['error', 'always'],
		'semi-spacing': 'error',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'ignore'
		}],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': ['error', 'always', { markers: ['!'] }],
		'wrap-regex': 'off'
	}
};
