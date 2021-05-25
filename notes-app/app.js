const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const notes = require("./notes.js");

yargs.version("2.2.0");

//create add command

yargs.command({
    command : "add",
    describe: "Add a new note",
    builder: 
    {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: 
        {
            describe: "Body Note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv)
    {
        // console.log(argv);
        notes.addNote(argv.title, argv.body);
        // console.log("Title: " + argv.title);
        // console.log("Body: " + argv.body);
    }
});

//create remove command

yargs.command({
    command: "remove",
    describe: "Remove a Note",
    builder: 
    {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv)
    {
        
        notes.removeNotes(argv.title);
    }
});

//create read command
yargs.command({
    command: "read",
    describe: "reading notes",
    handler()
    {
        console.log("reading a note");
    }
});

//create list command
yargs.command({
    command: "list",
    describe: "list your notes",
    handler()
    {
        notes.listNotes();
    }
});
//add, remove, read, list
yargs.parse();