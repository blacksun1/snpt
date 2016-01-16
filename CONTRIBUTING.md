# Contributing

Contributions are **welcome** and will be fully **credited**.

Contributions can be made via a Pull Request on [Github](https://github.com/mike182uk/snpt).

## Pull Requests

- **[Node coding style](https://github.com/felixge/node-style-guide)** - [JSCS](http://jscs.info/). Make sure you run `npm run sa` before committing your code.

- **Document any change in behavior** - Make sure the README and any other relevant documentation are kept up-to-date.

- **Create topic branches** - i.e `feature/some-awesome-feature`.

- **One pull request per feature**

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please squash them before submitting.

## Building The Project

The src is written in ES2015 and transpiled to ES5 when the module is published. You can manually transpile the src by running:

```bash
npm run build
```

## Running Tests

```bash
npm test
```

## Running Static Analysis

```bash
npm run sa
```
