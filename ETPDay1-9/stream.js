const fs = require("fs");

fs.writeFileSync("largefile.txt", "Start of the file.\n");

const readStream = fs.createReadStream("largefile.txt");

readStream.on("data", (chunk)=>{
    console.log("New Chunk Received:", chunk.toString("utf-8"));
})
