import _ from 'lodash';
import fetchGists from 'fetch-gists';
import inquirer from 'inquirer';
import moment from 'moment';
import Promise from 'bluebird';
import request from 'request';
import * as util from '../util';

const accessTokenConfigKey = 'gh-access-token';
const lastSyncDateConfigKey = 'last-sync-date';
const snippetsConfigKey = 'snippets';

export default function syncCommand(cli, config) {
  if (util.usageHelpRequired(cli)) {
    return usage(config);
  }

  let accessToken = config.get(accessTokenConfigKey);

  if (!accessToken) {
    inquirer.prompt({
      name: 'accessToken',
      message: 'Enter your GitHub access token:',
      type: 'password',
    }, function onAnswerPrompt(answers) {
      config.set(accessTokenConfigKey, answers.accessToken);

      syncGists(config);
    });
  } else {
    syncGists(config);
  }
}

function getGistContent(url) {
  return new Promise((resolve, reject) => {
    request.get(url, function onResponse(error, response, body) {
      resolve(body);
    });
  });
}

function syncGists(config) {
  let lastSyncDate = config.get(lastSyncDateConfigKey);

  if (lastSyncDate) {
    util.outputInfo(`Gists last synced ${moment(lastSyncDate).fromNow()}`);
  }

  util.outputInfo('Syncing gists');

  let accessToken = config.get(accessTokenConfigKey);

  fetchGists(accessToken).then(function onGistsRetrieved(gists) {
    let tasks = [];

    _.each(gists, gist => {
      _.each(gist.files, file => {
        let task = new Promise((resolve, reject) => {
          let fileIdPattern = /\/raw\/(.*)\//;
          let snippet = {
            id: fileIdPattern.exec(file.raw_url)[1],
            filename: file.filename,
            description: gist.description,
            content: '',
          };

          getGistContent(file.raw_url).then(
            function onGistContentRetrieved(content) {
              snippet.content = content;

              resolve(snippet);
            });
        });

        tasks.push(task);
      });
    });

    Promise.all(tasks).then(function onTaskComplete(snippets) {
      config.set(snippetsConfigKey, snippets);
      config.set(lastSyncDateConfigKey, moment().toISOString());

      util.outputSuccess(`${snippets.length} gist(s) synced`);
    });
  }).catch(function onGistsRetrievalError(err) {
    util.outputError(`Failed to sync gists due to: ${err}`);
  });
}

function usage(config) {
  console.log(`
    Usage: snpt sync

    If you have already supplied a GitHub access token this will be used when
    requesting your gists from GitHub. If you have not supplied one, you will be
    prompted to supply one.

    Your GitHub access token is stored in the snpt's config file located at:

      ${config.path}
  `);
}
