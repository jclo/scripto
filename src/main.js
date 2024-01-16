/** ****************************************************************************
 *
 * Defines ...
 *
 * xxx.js is just a literal object that contains a set of functions.
 * It can't be instantiated.
 *
 * Private Functions:
 *  . _run                        does ...,
 *
 *
 * Public Static Methods:
 *  . run                         does ...,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************** */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';


// -- Vendor Modules


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Private Functions --------------------------------------------------------

/**
 * Does ...
 *
 * @function ()
 * @private
 * @param {}                -,
 * @returns {}              -,
 * @since 0.0.0
 */
function _run() {
  //
}


// -- Public Static Methods ----------------------------------------------------

const M = {

  /**
   * Does...
   *
   * @method ()
   * @public
   * @param {}              -,
   * @return {Object}       returns this,
   * @since 0.0.0
   */
  /* eslint-disable no-console */
  run(xxx) {
    process.stdout.write('starting ...\n');
    process.stdout.write(`xxx argument: ${xxx}\n`);

    process.stdout.write('Game over!\n');
  },
};
/* eslint-enable no-console */


// -- Export
module.exports = M;
