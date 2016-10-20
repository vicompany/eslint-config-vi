# Changelog

## 2.2.1 (2016-10-20)

- ESLint 3.8.1
- Require function names to match the variable which they are assigned to: `'func-name-matching': ['error', { includeCommonJSModuleExports: false }]`.
- Added option `asyncArrow: 'ignore'` to the `space-before-function-paren` rule.

## 2.2.0 (2016-10-6)

- Allow inline comments: `'line-comment-position': 'off'`
- Arrow parens when needed (per spec) and when braces are used: `'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }]`

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