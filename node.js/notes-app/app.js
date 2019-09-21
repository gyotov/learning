const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function() {
    console.log(chalk.red('Adding new note'));
  }
});

// Remove the note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
});

// List notes
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function() {
    console.log('Listing notes');
  }
});

// Read notes
yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: function() {
    console.log('Reading note');
  }
});
