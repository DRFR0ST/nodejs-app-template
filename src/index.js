#!/usr/bin/env node
"use strict";
import program from "./utils/program";
import { info, warn, error, debug } from "./utils/console";

/**
 * Our point of insertion. (where it all begins..)
 * 
 * TIP: JavaScript is a script language and does not have a function as insertion point. I've created one just for convenience.
 * @see https://stackoverflow.com/questions/35706884/is-there-a-global-function-or-a-main-function-in-javascript
 */
(function init() {
  info("example-command v1.0.0");

  // Display debug message if enabled.
  program.debug && debug("extra debugging enabled");

  // Extract provided arguments. ( example-command [argument] )
  info(`The value is '${program.args[0]}'`);

  // now it's your turn..
})();
