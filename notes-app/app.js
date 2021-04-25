const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Leonardo");

fs.appendFileSync("notes.txt", "\nI'm kinda stressed");

fs.appendFileSync("notes.txt", "\nI have three cats");