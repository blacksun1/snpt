import _ from 'lodash';
import chalk from 'chalk';
import fetchGists from 'fetch-gists';
import inquirer from 'inquirer';
import Promise from 'bluebird';
import request from 'request';
import * as util from '../util';

const accessTokenConfigKey = 'gh-access-token';

export default function setAccessTokenCommand(cli, config) {
  if (util.usageHelpRequired(cli)) {
    return usage(config);
  }

  inquirer.prompt({
    name: 'accessToken',
    message: 'Enter your GitHub access token:',
    type: 'password',
  }, function onAnswerPrompt(answers) {
    config.set(accessTokenConfigKey, answers.accessToken);

    util.outputSuccess('GitHub access token saved');
  });
}

function usage(config) {
  console.log(`
    Usage: snpt token

    You will be prompted to supply your GitHub access token. This will be saved
    in snpt's config file located at:

      ${config.path}
  `);
}
