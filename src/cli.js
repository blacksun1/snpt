#! /usr/bin/env node

import _ from 'lodash';
import ConfigStore from 'configstore';
import meow from 'meow';

import pkg from '../package.json';
import copyCommand from './command/copy.js';
import listCommand from './command/list.js';
import setAccessTokenCommand from './command/set-access-token.js';
import syncCommand from './command/sync.js';
import writeToDiskCommand from './command/write-to-disk.js';

const commands = [
  copyCommand,
  listCommand,
  setAccessTokenCommand,
  syncCommand,
  writeToDiskCommand,
];

const config = new ConfigStore(pkg.name, {
  snippets: [],
});

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

snipt's config file can be found at:

  ${config.path}

`,
});

const command = _.find(commands, command => {
  return command.getName() == cli.input[0];
});

const helpRequired = cli.flags.hasOwnProperty('h');

if (command) {
  if (helpRequired) {
    console.log(command.getUsage());
  } else {
    command.run(cli, config);
  }
} else {
  cli.showHelp();
}
