rocket-88
=========

Scaffolding tool for Fastify projects.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/rocket-88.svg)](https://npmjs.org/package/rocket-88)
[![CircleCI](https://circleci.com/gh/davguij/rocket-88/tree/master.svg?style=shield)](https://circleci.com/gh/davguij/rocket-88/tree/master)
[![Codecov](https://codecov.io/gh/davguij/rocket-88/branch/master/graph/badge.svg)](https://codecov.io/gh/davguij/rocket-88)
[![Downloads/week](https://img.shields.io/npm/dw/rocket-88.svg)](https://npmjs.org/package/rocket-88)
[![License](https://img.shields.io/npm/l/rocket-88.svg)](https://github.com/davguij/rocket-88/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rocket-88
$ r88 COMMAND
running command...
$ r88 (-v|--version|version)
rocket-88/1.0.0 darwin-x64 node-v8.11.3
$ r88 --help [COMMAND]
USAGE
  $ r88 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`r88 hello [FILE]`](#r-88-hello-file)
* [`r88 help [COMMAND]`](#r-88-help-command)

## `r88 hello [FILE]`

describe the command here

```
USAGE
  $ r88 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ r88 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/davguij/rocket-88/blob/v1.0.0/src/commands/hello.ts)_

## `r88 help [COMMAND]`

display help for r88

```
USAGE
  $ r88 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_
<!-- commandsstop -->
