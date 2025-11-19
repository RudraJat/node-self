const fs= require("fs");

setImmediate(()=> console.log("setImmediate executed"));

setTimeout(()=> console.log("Time expired"),0);

Promise.resolve().then(()=> console.log("Promise"));

fs.readFile("./file.txt","utf-8",()=>{
    setTimeout(()=> console.log("2nd timer"),0);

    process.nextTick(()=> console.log("2nd nextTick"));

    setImmediate(()=> console.log("2nd setImmediate"));
    
    console.log("File read completed");
});

process.nextTick(()=> console.log("nextTick executed"));
console.log("Last line of the script");

//OUTPUT SEQUENCE:
// last line of the script
// nextTick executed
// Promise
// time expired
// setImmediate executed
// File read completed
// 2nd nextTick
// 2nd setImmediate --- because in event loop, when it is idle it wait on POLL PHASE and after that CHECK PHASE comes where setImmediate is executed
// 2nd timer