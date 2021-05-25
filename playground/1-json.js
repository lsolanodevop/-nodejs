const fs = require("fs");
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// fs.writeFileSync("1-JSON.json",bookJSON);

const dataBuffer = fs.readFileSync("1-JSON.json");

const dataJSON = dataBuffer.toString();


const data = JSON.parse(dataJSON);

console.log(data);

data.name = "Leonardo";
data.age = 26;

const changeJSON = JSON.stringify(data);

console.log(data);

fs.writeFileSync("1-JSON.json",changeJSON);