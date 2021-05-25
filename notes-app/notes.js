const { doesNotThrow } = require("assert");
const chalk = require("chalk");
const { Console } = require("console");
const { randomInt } = require("crypto");
const fs = require("fs");

const getNotes = function()
{
    return "Your Notes...";
}

const addNote = function(title,body)
{
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) 
    {
        return note.title === title;
    });

    if(duplicateNotes.length === 0)
    {
        notes.push(
            {
                title: title,
                body: body
            });
        saveNotes(notes);
        console.log("New note added");
    }else
    {
        console.log("Note title taken");
    }
    
}

const saveNotes = function(notes)
{
    const saveN = JSON.stringify(notes);
    fs.writeFileSync("notes.json",saveN);
}

const loadNotes = function()
{
    try
    {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        // console.log(JSON.parse(dataJSON));
        return JSON.parse(dataJSON);
    }catch (e)
    {
     return [];   
    }
}

const removeNotes = function(title)
{
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) 
    {
       return note.title !== title;
    });
    console.log(notesToKeep.length);
    console.log(notes.length);
    const comp = notesToKeep.length != notes.length;
    if(comp)
    {
        console.log(chalk.bgGreen("Note removed"));
        saveNotes(notesToKeep);
    }else
    {
        console.log(chalk.bgRed("No Note Found!"));
    }
    
    
}

module.exports = 
{
    getNotes: getNotes,
    addNote: addNote,
    removeNotes : removeNotes
};

// const names = "Leonardo";

// module.exports = names;