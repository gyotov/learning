const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('Title: ' + argv.title);
  }
});

// Remove the note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log(chalk.red('Removing new note'));
  }
});

// List notes
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function() {
    console.log(chalk.blue('Listing notes'));
  }
});

// Read notes
yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: function() {
    console.log(chalk.blue('Reading note'));
  }
});

yargs.parse();
