const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'No body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Remove the note
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
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
