# Snpt

[![Version](https://img.shields.io/npm/v/snpt.svg?style=flat-square)](https://www.npmjs.com/package/snpt)
[![Build Status](https://img.shields.io/travis/mike182uk/snpt.svg?style=flat-square)](http://travis-ci.org/mike182uk/snpt)
[![npm](https://img.shields.io/npm/dm/snpt.svg?style=flat-square)](https://www.npmjs.com/package/snpt)
[![License](https://img.shields.io/github/license/mike182uk/snpt.svg?style=flat-square)](https://www.npmjs.com/package/snpt)

A [gist](https://gist.github.com/) powered CLI snippet retriever.

Save a snippet as a gist in GitHub, retrieve the snippet on the command line.

Written in ES2015 and published as ES5.

![](example.gif)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- GitHub account (duh!)
- GitHub [access token](https://github.com/blog/1509-personal-api-tokens) with the `gist` scope enabled

## Installation

```
npm install -g snpt
```

## Usage

### Syncing your snippets

Before you can use snpt you will need to sync your gists:

```bash
snpt sync
```

If this is the first time you have synced your gists you will be prompted to input a GitHub [access token](https://github.com/blog/1509-personal-api-tokens) (you will need create this in your GitHub account). This token should be be created with the `gist` scope enabled.

The sync command will download all of your public and private gists and store them locally for fast retrieval by snpt.

### Copying a snippet to the clipboard

```
snpt cp [snippetID]
```

`snippetId` is an optional parameter. If a `snippetId` is not supplied a prompt will be displayed allowing you to choose a snippet to copy to the clipboard.

### Creating a file from a snippet

```
snpt write [snippetID]
```

`snippetId` is an optional parameter. If a `snippetId` is not supplied a prompt will be displayed allowing you to choose a snippet to create a file from. The created file will be named after the name of the gist file.

### Listing available snippets

```
snpt ls
```

This can be useful for searching for a specific snippet - `snpt ls | grep <query>`.

### Set a new GitHub access token

```
snpt token
```

This command will prompt you to input a new GitHub [access token](https://github.com/blog/1509-personal-api-tokens).


### Viewing help for a command

You can view help for a command by passing the `-h` flag when running a command:

```bash
snpt sync -h
```

### Improve your workflow with fuzzy search

snpt :heart: [fzf](https://github.com/junegunn/fzf)


![](fzf-example.gif)

```bash
snpt ls | fzf | snpt cp
```

Speed this up by aliasing common usages:

```
alias cs="snpt ls | fzf | snpt cp" # cs for copy snippet
alias ws="snpt ls | fzf | snpt write" # ws for write snippet
```

`snpt cp` and `snpt write` both accept stdin as an input. If stdin is detected snpt will try and extract a snippet ID from it. This is how the above `fzf` usage works.

## Uninstalling snpt

First run `snpt` to find the location of snpt's config file.

Once you have deleted the config file you can uninstall snpt by running:

```bash
npm uninstall -g snpt
```
