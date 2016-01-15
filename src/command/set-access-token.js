import command from '../command';
import inquirer from 'inquirer';
import * as util from '../util';

const accessTokenConfigKey = 'gh-access-token';

const name = 'token';
const usage = `
  Usage: snpt token

  You will be prompted to supply your GitHub access token. This will be saved
  in snpt's config file.
`;

function setAccessTokenAction(config) {
  inquirer.prompt({
    name: 'accessToken',
    message: 'Enter your GitHub access token:',
    type: 'password',
  }, function onAnswerPrompt(answers) {
    config.set(accessTokenConfigKey, answers.accessToken);

    util.outputSuccess('GitHub access token saved');
  });
}

export default command(name, usage, setAccessTokenAction);
