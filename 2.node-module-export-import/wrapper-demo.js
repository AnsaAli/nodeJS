
const wrapperFromExplorer = require('./wrapper-explorer');//this line executed synchronously.
//once the above module completed it will go to this file, wrapper-demo.js

console.log('In wrapper-demo'); //print only after explorer finished execution

console.log('__filename',__filename);
console.log('__dirname',__dirname);

wrapperFromExplorer.greet('Ansa');

