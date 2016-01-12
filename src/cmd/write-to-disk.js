import findSnippet from '../find-snippet';
import fs from 'fs';
import * as util from '../util';

const snippetsConfigKey = 'snippets';

export default function writeToDiskCommand(cli, config) {
  if (util.usageHelpRequired(cli)) {
    return usage();
  }

  return findSnippet(cli, config, writeSnippetFileToDisk);
}

function writeSnippetFileToDisk(snippet) {
  // @todo check if file already exists and prompt to override

  fs.writeFile(snippet.filename, snippet.content, 'utf8',
    function onSnippetFileCreated(err) {
      if (err) {
        // @todo
      }

      util.outputSuccess(`${snippet.filename} created`);
    });
}

function usage() {
  // jscs:disable maximumLineLength
  console.log(`
    Usage: snpt write [snippetId]

    If you do not provide a snippetId then a prompt will be shown and you can
    select the snippet you want to write to disk.

    Snpt will read from stdin if provided and attempt to extract a snippet ID
    from it. The stdin should be formatted like:

      Some random string [snippetId]

    Snpt will parse anything in the sqaure brackets that appears at the end of
    the string. This is useful for piping into snpt:

      echo 'foo - bar baz [aff9aa71ead70963p3bfa4e49b18d27539f9d9d8]' | snipt write
  `);
  // jscs:enable maximumLineLength
}
