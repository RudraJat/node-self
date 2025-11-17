require("./xyz.js");
const express = require('express');
const app = express();
const userRouter = require('./calculate/user.js');
const productRouter = require('./calculate/product.js');

app.use('/user', userRouter);
app.use('/product', productRouter);

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