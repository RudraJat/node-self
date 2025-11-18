require("./xyz.js");


// const {calculateSum}=require("./calculate/sum.js");
// const {calculatemultiply}=require("./calculate/multiply.js");

//nodejs knows from where to recieve the module if we give folder name it will look for index.js file inside that folder
const {calculateSum,calculatemultiply}=require("./calculate");

// var name="Node practice";
const data = require("./data.json");
console.log(data);
var a=10;
var b=10;
console.log(calculateSum(a,b));
console.log(calculatemultiply(a,b));

// console.log(exam);
// console.log("Welcome to "+name);
// console.log(a+b);