const fs = require("fs");
const zlib = require("zlib");

fs.writeFileSync("largefile.txt", "This is some text data that needs to be compressed.");

//Compress the file
fs.createReadStream("largefile.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("largefile.txt.gz"))
    .on("finish",()=>{
        console.log("File Compressed Successfully.");

        //Decompress the file
        fs.createReadStream("largefile.txt.gz")
            .pipe(zlib.createGunzip())
            .pipe(fs.createWriteStream("decompressedfile.txt"))
            .on("finish", () => {
                console.log("File Decompressed Successfully.");
            });
    })
