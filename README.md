# eslint-config-vi

[![Build Status](https://travis-ci.org/vicompany/eslint-config-vi.svg?branch=master)](https://travis-ci.org/vicompany/eslint-config-vi)

This package provides a [ESLint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for the VI Company's JS coding style.

## Why another config?

We love the [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), but we don't agree on everything and it's easier to maintain our own config.

## Installation

To make use of this config, install ESLint (>= 2.6) and this package as a development dependency of your project:

    npm install eslint eslint-config-vi --save-dev

## Usage

Add some ESLint config to your `package.json`:

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "vi"
  }
}
```

Or create a [`.eslintrc.*`](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) config file:

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

## Legacy code

The default is ES2015, but if you need to support legacy code, you can use the [`vi/legacy`](legacy.js) config:

```json
{
  "extends": "vi/legacy"
}
```

## Node.js

For Node.js development you can use the [`vi/node`](node.js) config:

```json
{
  "extends": "vi/node"
}
```

## License

MIT © [VI Company](http://vicompany.nl)
