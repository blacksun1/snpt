import chalk from 'chalk';

export function createSnippetDescription(snippet) {
  let description = chalk.yellow(snippet.filename);

  if (snippet.description) {
    description += ` - ${snippet.description}`;
  }

  description += ` [${snippet.id}]`;

  return description;
}

export function extractSnippetIdFromQuery(query) {
  let snippetIdPattern = /\[([A-Za-z0-9]+)\]$/;

  if (snippetIdPattern.test(query)) {
    return snippetIdPattern.exec(query)[1];
  }
}

export function output(message) {
  console.log(message);
}

export function outputInfo(message) {
  console.log(chalk.blue(message));
}

export function outputSuccess(message) {
  console.log(chalk.green(message));
}

export function outputError(message) {
  console.log(chalk.red(message));
}
