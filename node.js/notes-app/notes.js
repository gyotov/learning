const fs = require('fs');
const chalk = require('chalk');

/*
    Add note
*/
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  debugger;

  if (!duplicateNote) {
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

/*
    Save notes
*/
const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

/*
    Remove note
*/
const removeNote = title => {
  const notes = loadNotes();
  const filterNotes = notes.filter(note => note.title !== title);

  if (notes.length > filterNotes.length) {
    console.log(chalk.green('Note removed!'));
    saveNotes(filterNotes);
  } else {
    console.log(chalk.red('Note note found!'));
  }
};

/*
    List notes
*/
const listNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(chalk.blue('Your notes:'));

    notes.forEach(note => {
      console.log(chalk.yellow(note.title));
    });
  } else {
    console.log(chalk.red('You have no notes!'));
  }
};

/*
    Read note
*/
const readNote = title => {
  const notes = loadNotes();
  const targetNote = notes.find(note => note.title === title);

  if (targetNote) {
    console.log(chalk.blue(targetNote.title));
    console.log(chalk.yellow(targetNote.body));
  } else {
    console.log(chalk.red('No note found!'));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
