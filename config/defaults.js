module.exports = {
	env: {
		browser: true,
	},
	rules: {
		// Possible Errors
		'for-direction': 'error',
		'getter-return': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
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
		'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false, enforceForArrowConditionals: false, returnAssign: false }],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'off',
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
		'array-callback-return': ['error', { allowImplicit: false }],
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
		'no-invalid-this': 'error',
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
		'no-return-assign': ['error', 'except-parens'],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': ['error', { props: true }],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		'radix': 'error',
		'require-await': 'off',
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
		'array-bracket-newline': 'off',
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': 'off',
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		'camelcase': ['error', { properties: 'always' }],
		'capitalized-comments': 'off',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': 'off',
		'eol-last': 'error',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error', { includeCommonJSModuleExports: false }],
		'func-names': 'off',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'function-paren-newline': ['error', 'multiline'],
		'id-blacklist': 'warn',
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'keyword-spacing': 'error',
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'lines-between-class-members': ['error', 'always'],
		'max-depth': ['error', 4],
		'max-len': ['error', 80, 4, { ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
		'max-lines': 'off',
		'max-nested-callbacks': ['warn', 4],
		'max-params': ['error', 5],
		'max-statements': 'off',
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-comment-style': ['error', 'separate-lines'],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': ['error', { newIsCap: true, capIsNew: true }],
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': ['error', 'WithStatement'],
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true, enforceInMethodNames: false }],
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': ['error', { consistent: true }],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'one-var': ['error', { var: 'always', let: 'never', const: 'never' }],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': 'off',
		'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
		'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			{ blankLine: 'always', prev: 'directive', next: '*' },
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
		],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single'],
		'require-jsdoc': 'off',
		'semi': ['error', 'always'],
		'semi-spacing': 'error',
		'semi-style': ['error', 'last'],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'ignore' }],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': ['error', 'always', { markers: ['!'] }],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'wrap-regex': 'off',
	},
};
