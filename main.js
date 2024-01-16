#!/usr/bin/env node
// ESLint declarations
/* global */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Node modules
const nopt = require('nopt')
    ;


// -- Local modules
const M = require('./src/main');


// -- Local constants
const opts      = {
      help: [Boolean, false],
      version: [String, null],
      xxx: [String, null],
    }
    , shortOpts = {
      h: ['--help'],
      v: ['--version', '1.0.0-beta.1'],
      x: ['--xxx'],
    }
    , parsed = nopt(opts, shortOpts, process.argv, 2)
    ;


// -- Local variables


// -- Private functions --------------------------------------------------------

/**
 * Does ...
 *
 * @function ()
 * @private
 * @param {}                ...,
 * @returns {}              ...,
 * @since 0.0.0
 */
function _help() {
  const message = ['',
    'Usage: command [options]',
    '',
    'xxx                  do ...',
    '',
    'Options:',
    '',
    '-h, --help           output usage information',
    '-v, --version        output the version number',
    '-x, --xxx            arguments',
  ].join('\n');

  process.stdout.write(`${message}\n`);
  process.exit(0);
}

/**
 * Does ...
 *
 * @function ()
 * @private
 * @param {}                ...,
 * @returns {}              ...,
 * @since 0.0.0transfer-ent-com
 */
function _run() {
  if (parsed.argv.remain[0] === 'xxx') {
    process.stdout.write('do ...\n');
    M.run(parsed.xxx);
    return;
  }

  _help();
}


// -- Main ---------------------------------------------------------------------

/**
 * Starting the script.
 *
 */
if (parsed.help) {
  _help();
}

if (parsed.version) {
  process.stdout.write(`version: ${parsed.version}\n`);
  process.exit(0);
}

_run();


// -- oOo --
