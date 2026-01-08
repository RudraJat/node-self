const fs = require("fs");

const stream = fs.createWriteStream("output.txt");

for(let i=2; i<100; i++){
    let isPrime = true;
    for(let j=2; j<i; j++){
        if(i%j===0) isPrime=false;
    }
    if(isPrime) stream.write(i+"\n");
}

stream.end();
console.log("Task completed");