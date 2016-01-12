import { copy as copyToClipboard } from 'copy-paste';
import findSnippet from '../find-snippet';
import * as util from '../util';

export default function copyCommand(cli, config) {
  if (util.usageHelpRequired(cli)) {
    return usage();
  }

  return findSnippet(cli, config, copySnippetToClipboard);
}

function copySnippetToClipboard(snippet) {
  copyToClipboard(snippet.content, function onSnippetCopied() {
    util.outputSuccess(`${snippet.filename} copied to the clipboard`);
  });
}

function usage() {
  console.log(`
    Usage: snpt cp [snippetId]

    If you do not provide a snippetId then a prompt will be shown and you can
    select the snippet you want to copy to the clipboard.

    Snpt will read from stdin if provided and attempt to extract a snippet ID
    from it. The stdin should be formatted like:

      Some random string [snippetId]

    Snpt will parse anything in the sqaure brackets that appears at the end of
    the string. This is useful for piping into snpt:

      echo 'foo - bar baz [aff9aa71ead70963p3bfa4e49b18d27539f9d9d8]' | snipt cp
  `);
}
