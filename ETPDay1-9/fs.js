
const fs = require("fs");

fs.writeFileSync("example.txt", "This is an example file.");

const content = fs.readFileSync("example.txt", "utf-8");
console.log("File Content: ", content);

fs.appendFileSync("example.txt", "\nAppended line.");

const  updatedContent = fs.readFileSync("example.txt", "utf-8");
console.log("Updated File Content: ", updatedContent);

fs.unlinkSync("example.txt");

