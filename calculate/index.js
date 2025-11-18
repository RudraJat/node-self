//We are using folder as an module directly 

const {calculateSum} = require('./sum');
const {calculatemultiply} = require('./multiply');

module.exports={calculateSum,calculatemultiply};