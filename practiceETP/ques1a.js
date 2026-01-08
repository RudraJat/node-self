const http = require("http");
const fs = require("fs");

http.createServer((req, res)=>{
    fs.copyFile("source.txt", "duplicate.txt",(err)=>{
        if(err){
            res.end("Error occurred while copying file.");
        }else{
            res.end("File copied successfully.");
        }
    })
}).listen(3000)