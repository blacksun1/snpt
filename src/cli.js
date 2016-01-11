#! /usr/bin/env node

import ConfigStore from 'configstore';
import meow from 'meow';

import pkg from '../package.json';
import copyCommand from './cmd/copy.js';
import listCommand from './cmd/list.js';
import setAccessTokenCommand from './cmd/set-access-token.js';
import syncCommand from './cmd/sync.js';
import writeToDiskCommand from './cmd/write-to-disk.js';

const cli = meow({
  help: `
Commands:
    cp       Copy a snippet to the clipboard
    ls       List all available snippets
    sync     Download gists from github and store locally
    write    Write a snippet to disk
    token    Set your GitHub access token

To view usage information for a command, use the -h flag when running it:

  snpt cp -h
`,
});
const config = new ConfigStore(pkg.name, {
  snippets: [],
});

switch (cli.input[0]) {
  case 'cp': {
    copyCommand(cli, config);
    break;
  }
  case 'ls': {
    listCommand(cli, config);
    break;
  }
  case 'sync': {
    syncCommand(cli, config);
    break;
  }
  case 'token': {
    setAccessTokenCommand(cli, config);
    break;
  }
  case 'write': {
    writeToDiskCommand(cli, config);
    break;
  }
  default: {
    cli.showHelp();
  }
}
