# eslint-config-vi

[![npm](https://img.shields.io/npm/v/eslint-config-vi.svg)](https://npm.im/eslint-config-vi)
[![Build Status](https://travis-ci.org/vicompany/eslint-config-vi.svg?branch=master)](https://travis-ci.org/vicompany/eslint-config-vi)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)

This package provides an ESLint config for the VI Company's JS coding style.

## Why another config?

The `eslint-config-vi` is based on the [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) config. That config is well maintained and we agree with most of the rules set. We extend the `eslint-config-airbnb-base` with our own rules.  
The `eslint-config-airbnb-base` is defined as a peerDependency so it should be installed separately.
## Installation

To make use of this config, install this package and its peerDepencies as a development dependencies of your project. `eslint-config-airbnb-base` also makes use of peerDependencies which also needs to be installed:

    npx install-peerdeps eslint-config-vi
    npx install-peerdeps eslint-config-airbnb-base -o

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

For Node.js development you can use the [`eslint-config-vi/node`](./node.js) config:

### .eslintrc.js
```js
module.exports = {
  extends: 'eslint-config-vi/node'
};
```

## Changelog

Read the [Changelog](CHANGELOG.md)

## License

MIT © [VI Company](http://vicompany.nl)
