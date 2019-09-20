const yargs = require('yargs');
// const chalk = require('chalk');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log('Adding new note');
  }
});

// add, remove, read, list

console.log(yargs.argv);
