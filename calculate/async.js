const fs = require('fs');
const http = require('http');

console.log('Starting async operation...');

var a=3776;
var b=4422;

http.get('http://www.example.com', (res) => {
    console.log('HTTP GET request completed.');
});

setTimeout(()=>{
    console.log('Timeout of 2 seconds finished.');
},2000);

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log('File Data:',data);
});

function multiplyAsync(x,y){
    const result=x*y;
    return result;
}

console.log('Multiplication Result:', multiplyAsync(a,b));