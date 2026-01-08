const fs = require("fs");
const http = require("http");

http.createServer((req,res)=>{
    fs.createReadStream("source.txt").pipe(res);
}).listen(3000);