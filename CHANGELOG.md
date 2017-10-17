# Changelog

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
