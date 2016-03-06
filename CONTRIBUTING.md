# Contributing

Contributions are **welcome!**

Contributions can be made via a Pull Request on [Github](https://github.com/mike182uk/snpt).

## Reporting an Issue

Please report issues via the issue tracker on [Github](https://github.com/mike182uk/snpt). For security-related issues, please email the maintainer directly.

## Pull Requests

- **[Node.js coding style](https://github.com/felixge/node-style-guide)** - [JSCS](http://jscs.info/), [JSHint](http://jshint.com/). Make sure you run `npm run sa` before committing your code.

- **Document any change in behavior** - Make sure the README and any other relevant documentation are kept up-to-date.

- **Create topic branches** - i.e `feature/some-awesome-feature`.

- **One pull request per feature**

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please squash them before submitting.

- **Use conventional-changelog style commit messages** - See [here](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) for more details. This project is [commitizen](https://commitizen.github.io/cz-cli/) friendly.

## Building The Project

The src is written in ES2015 and transpiled to ES5 when the module is published. You can manually transpile the src by running:

```bash
npm run build
```

## Running Tests

You can run all of the tests in the project using:

```bash
npm test
```

## Running Static Analysis Tools

You can run all of the static analysis tools used by the project using:

```bash
npm run sa
```
