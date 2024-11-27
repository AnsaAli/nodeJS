
//require localmodule in index.js
require('./localmodule.js');

console.log('in index.js')

//to understand the flow, run and debug, choose node js , run and debug 


//require the exports function from other module, which will return the value
const subtract = require('./localmodule.js');
console.log(subtract(20,10))