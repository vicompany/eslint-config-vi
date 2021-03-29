# Changelog

## 11.0.0 (2021-03-02)
- The config is now based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- Extending with our own overrides

## 10.8.0 (2020-01-09)
- ESLint 6.8.0
- Test on Node.js latest stable and LTS

## 10.7.0 (2019-11-28)
- ESLint 6.7.1
- Add rule `'grouped-accessor-pairs': ['error', 'getBeforeSet']`
- Add rule `'no-constructor-return': 'error'`
- Add rule `'no-dupe-else-if': 'error'`
- Add rule `'no-setter-return': 'error'`
- Add rule `'prefer-exponentiation-operator': 'error'`

## 10.6.0 (2019-10-29)
- ESLint 6.6.0

## 10.5.0 (2019-10-02)
- ESLint 6.5.1

## 10.4.0 (2019-09-17)
- ESLint 6.4.0
- Add rule `'no-import-assign': 'error'`
- Add rule `'prefer-regex-literals': 'error'`
- Add rule `'default-param-last': 'error'`

## 10.3.0 (2019-08-30)
- Update rule `'prefer-named-capture-group': 'warning'`

## 10.2.0 (2019-08-30)
- ESLint 6.2.2
- Add rule `'function-call-argument-newline': ['error', 'consistent']`
- Update `ecmaVersion` to `2020`.

## 10.1.0 (2019-07-25)
- ESLint 6.1.0

## 10.0.0 (2019-06-26)
- ESLint 6.0.1
- Remove `vi/legacy` config.

## 9.6.0 (2019-04-02)
- ESLint 5.16.0

## 9.5.0 (2019-03-29)
- ESLint 5.15.3
- Add rule `'prefer-named-capture-group': 'error'`

## 9.4.0 (2019-02-05)
- ESLint 5.14.1
- Update rule `'no-console': ['warn', { allow: ['warn', 'error'] }]`

## 9.3.0 (2019-02-05)
- ESLint 5.13.0
- Add rule `'no-useless-catch': 'error'`.
- Remove rule `'require-jsdoc': 'off'`.
- Remove rule `'valid-jsdoc': 'off'`.

## 9.2.0 (2018-09-25)
- ESLint 5.6.0
- Add rule `'no-misleading-character-class': 'off'`.
- Add rule `'require-atomic-updates': 'off'`.
- Add rule `'no-async-promise-executor': 'error'`.
- Add rule `'require-unicode-regexp': 'off'`.

## 9.1.0 (2018-07-11)
- ESLint 5.1.0
- Remove deprecated rule `no-catch-shadow`.

## 9.0.0 (2018-06-27)
- ESLint 5.0.1
- Add rule `'max-classes-per-file': ['error', 1]`.
- Add rule `'max-lines-per-function': 'off'`.
- Add rule `'prefer-object-spread': 'error'`.
- Update rule `'array-element-newline': ['error', 'consistent']`.
- Update rule `'camelcase': ['error', { properties: 'always', ignoreDestructuring: false }]`.
- Update rule `'no-self-assign': ['error', { props: true }]`.
- Update rule `'func-name-matching': ['error', { includeCommonJSModuleExports: false, considerPropertyDescriptor: true }]`.
- Update rule `'max-len': ['warn', 100, 4, { ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }]`.
- Update rule `'prefer-destructuring': ['warn', { array: true, object: true }, { enforceForRenamedProperties: false }]`.
- Remove rule `'prefer-reflect': 'off'`.

## 8.6.0 (2018-05-09)
- ESLint 4.19.1

## 8.5.1 (2018-03-08)
- ESLint 4.18.2

## 8.5.0 (2018-02-21)
- ESLint 4.18.1
- Update `ecmaVersion` to `2018`.

## 8.4.0 (2018-01-31)
- ESLint 4.16.0

## 8.3.0 (2018-01-10)
- ESLint 4.15.0
- Add rule `'implicit-arrow-linebreak': ['error', 'beside']`.
- Update rule `'array-callback-return': ['error', { allowImplicit: false }]`.

## 8.2.0 (2017-11-10)
- ESLint 4.10.0

## 8.1.0 (2017-10-17)
- ESLint 4.9.0
- Disable rule `require-await`.
- Add rule `'multiline-comment-style': ['error', 'separate-lines']`.
- Add rule `'lines-between-class-members': ['error', 'always']`.

## 8.0.0 (2017-09-08)
- Support ES8 syntax `ecmaVersion: 8`.

## 7.3.0 (2017-09-08)
- ESLint 4.6.1
- Add rule `'function-paren-newline': ['error', 'multiline']`.
- Fix conflicting rules `no-return-assign` and `no-extra-parens`.

## 7.2.0 (2017-08-25)
- ESLint 4.5.0

## 7.1.0 (2017-08-01)
- ESLint 4.3.0

## 7.0.0 (2017-07-12)
- ESLint 4.2.0
- Add rule `'array-element-newline': 'off'`.
- Add rule `'semi-style': ['error', 'last']`.
- Add rule `padding-line-between-statements`.
- Add rule `'for-direction': 'error'`.
- Add rule `'switch-colon-spacing': ['error', { after: true, before: false }]`.
- Add rule `'array-bracket-newline': 'off'`.
- Add rule `'no-buffer-constructor': 'error'`.
- Add rule `'getter-return': 'error'`.
- Remove deprecated rule `lines-around-directive`.
- Remove deprecated rule `newline-after-var`.
- Remove deprecated rule `newline-before-return`.

## 6.0.0 (2017-03-31)
- ESLint 3.18.0
- Add rule `'no-compare-neg-zero': 'error'`.
- Add rule `'nonblock-statement-body-position': 'off'`.

## 5.1.0 (2017-02-28)
- ESLint 3.16.1

## 5.0.0 (2017-02-08)
- ESLint 3.15.0
- Add rule `'template-tag-spacing': ['error', 'never']`.
- Add rule `'no-multi-assign': 'error'`.
- Add rule `'prefer-promise-reject-errors': 'error'`.

## 4.0.0 (2017-01-11)
- ESLint 3.13.1
- Add rule `prefer-destructuring`.

## 3.1.1 (2016-12-15)
- Disable rule `capitalized-comments`.

## 3.1.0 (2016-12-15)
- ESLint 3.12.2
- Add rule `'no-await-in-loop': 'error'`.
- Add rule `'capitalized-comments': ['error', 'always']`.
- Add rule `'require-await': 'error'`.

## 3.0.1 (2016-11-16)
- Added missing rules.

## 3.0.0 (2016-11-16)
- ESLint 3.10.2
- Enable rule `prefer-const`.
- Update rule `comma-dangle` to `always-multiline`.
- Switch to ECMAScript 2016/ES7.

## 2.2.2 (2016-11-04)

- ESLint 3.9.1

## 2.2.1 (2016-10-20)

- ESLint 3.8.1
- Require function names to match the variable which they are assigned to: `'func-name-matching': ['error', { includeCommonJSModuleExports: false }]`.
- Added option `asyncArrow: 'ignore'` to the `space-before-function-paren` rule.

## 2.2.0 (2016-10-6)

- Allow inline comments: `'line-comment-position': 'off'`
- Use ES6 arrow parens when needed (per spec) and when braces are used: `'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }]`

## 2.1.0 (2016-10-4)

- ESLint 3.7.1

## 2.0.0 (2016-09-30)

- ESLint 3.6.1

## 1.3.0 (2016-09-30)

- ESLint 3.5.0
- Ignore strings and template literals for max line length: `'max-len': ['error', 80, 4, { ignoreComments: true, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }]`
- Allow all object properties on one line: `'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }]`
- Use implied strict mode for node modules: `impliedStrict: true`

## 1.2.1 (2016-08-31)

- Warn when class methods don't use this: `'class-methods-use-this': 'warn'`

## 1.2.0 (2016-08-30)

- ESLint 3.4.0

## 1.1.1 (2016-07-19)

- Allow ternary operators on multiple lines: `'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }]`
