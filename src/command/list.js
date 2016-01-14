import _ from 'lodash';
import command from '../command';
import * as util from '../util';

const snippetsConfigKey = 'snippets';

const name = 'ls';
const usage = `
  Usage: snpt ls
`;

function listAction(cli, config) {
  let snippets = config.get(snippetsConfigKey);

  if (!snippets.length) {
    return util.outputInfo('There are no snippets to list');
  }

  _.each(snippets, function outputSnippetDescription(snippet) {
    util.output(util.createSnippetDescription(snippet));
  });
}

export default command(name, usage, listAction);
