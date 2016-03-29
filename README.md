# eslint-config-vi

[![Build Status](https://travis-ci.org/vicompany/eslint-config-vi.svg?branch=master)](https://travis-ci.org/vicompany/eslint-config-vi)

This package provides a [ESLint shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for ES6 projects that conforms to the VI Company's coding style.

## Why another config?

Our config is based on the Airbnb config, but we don't agree on everything and it's easier to maintain our own config.

## Installation

To make use of this config, install ESLint (>= 2.0) and this package as a development dependency of your project:

    npm install eslint eslint-config-vi --save-dev

Then you can add a [eslint config file](http://eslint.org/docs/user-guide/configuring) or modify your project's package.json.

### Create a .eslintrc.* config file

Create a [`.eslintrc.*`](http://eslint.org/docs/user-guide/configuring#configuration-file-formats) config file in the root of your project or JS folder.

```json
{
  "extends": "vi",
  "root": true
}
```

### Extend the package.json file

```json
{
  "eslintConfig": {
    "extends": "vi",
    "root": true
  }
}
```

## License

MIT © [VI Company](http://vicompany.nl)
