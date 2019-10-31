const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
  return 'Success';
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green('New note added!'));
  } else {
    console.log(chalk.red('Note title taken!'));
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const filterNotes = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > filterNotes.length) {
    console.log(chalk.green('Note removed!'));
    saveNotes(filterNotes);
  } else {
    console.log(chalk.red('Note note found!'));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
