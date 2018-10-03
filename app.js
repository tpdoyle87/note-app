console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv
var command = argv._[0];
console.log('Command:', command);
// console.log('Yargs', argv);
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note === undefined) {
    console.log(`Note title '${argv.title}' already exists`)
  } else {
    console.log(`Note '${note.title}' has been succefully saved!`)
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'delete') {
  notes.removeNote(argv.title);
} else {
  console.log('command not recongnized');
}
