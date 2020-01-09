const program = require("commander");

// Change syntax and version here.
program.command("example-command <value>");
program.version('1.0.0', '-v, --vers', 'output the current version');

program.option("-d, --debug", "output extra debugging");
// Add flags here...


program.parse(process.argv);
export default program;
