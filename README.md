# eslint-config-vi

[![npm](https://img.shields.io/npm/v/eslint-config-vi.svg)](https://npm.im/eslint-config-vi)
[![Build Status](https://travis-ci.org/vicompany/eslint-config-vi.svg?branch=master)](https://travis-ci.org/vicompany/eslint-config-vi)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)

This package provides a [ESLint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for the VI Company's JS coding style.

## Why another config?

We love the [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), but we don't agree on everything and it's faster and easier to maintain our own config.

## Installation

To make use of this config, install ESLint and this package as a development dependency of your project:

    npm install eslint eslint-config-vi --save-dev

## Usage

Create a [`.eslintrc.*`](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) config file:

### .eslintrc.js
```js
module.exports = {
  extends: 'vi'
};
```

### .eslintrc.json
```json
{
  "extends": "vi"
}
```

## Configuration

The default [`vi`](config/esnext.js) config supports ES2015+ code and targets the browser.

### Node.js

For Node.js development you can use the [`vi/node`](config/node.js) config:

### .eslintrc.js
```js
module.exports = {
  extends: 'vi/node'
};
```

## Changelog

Read the [Changelog](CHANGELOG.md)

## License

MIT © [VI Company](http://vicompany.nl)
