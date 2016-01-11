import _ from 'lodash';
import chalk from 'chalk';
import getStdin from 'get-stdin';
import inquirer from 'inquirer';
import * as util from './util';

const snippetsConfigKey = 'snippets';

export default function findSnippet(cli, config, onFoundSnippet) {
  let snippets = config.get(snippetsConfigKey);
  let snippetId = cli.input[1] || null;

  if (!snippets.length) {
    return util.outputInfo('There are no snippets');
  }

  getStdin().then(function onStdinBuffered(stdin) {
    // if there is data in STDIN try and extract the id
    if (stdin) {
      let id = util.extractSnippetIdFromQuery(_.trim(stdin));
      let snippet = _.findWhere(snippets, { id: id });

      if (snippet) {
        return onFoundSnippet(snippet);
      }

      util.outputError('No snippet was found that matches this query');
    // if the snippet id was supplied then try to find a matching snippet
    } else if (snippetId) {
      let snippet = _.findWhere(snippets, { id: snippetId });

      if (snippet) {
        return onFoundSnippet(snippet);
      }

      util.outputError('No snippet was found that matches this ID');
    // if there was no STDIN and no snippet ID passed in then prompt a list
    // of available snippets
    } else {
      inquirer.prompt({
        name: 'snippet',
        message: 'Select a snippet:',
        type: 'list',
        choices: function generateSnippetChoicesForPrompt() {
          return _.map(snippets,
            function generateSnippetChoiceForPrompt(snippet) {
              return {
                name: util.createSnippetDescription(snippet),
                value: snippet,
              };
            });
        },
      }, function onAnswerPrompt(answers) {
        onFoundSnippet(answers.snippet);
      });
    }
  });
}
