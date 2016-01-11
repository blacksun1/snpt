import _ from 'lodash';
import * as util from '../util';

const snippetsConfigKey = 'snippets';

export default function listCommand(cli, config) {
  if (util.usageHelpRequired(cli)) {
    return usage();
  }

  let snippets = config.get(snippetsConfigKey);

  if (!snippets.length) {
    return util.outputInfo('There are no snippets to list');
  }

  _.each(snippets, function outputSnippetDescription(snippet) {
    util.output(util.createSnippetDescription(snippet));
  });
}

function usage() {
  console.log(`
    Usage: snpt ls
  `);
}
