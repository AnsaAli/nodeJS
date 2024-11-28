
//import path module
const path = require('path');

console.log(__filename); //C:\Users\Ansa Ali\OneDrive\Desktop\nodeJS\4.path-module\1.index.js
console.log(__dirname); //C:\Users\Ansa Ali\OneDrive\Desktop\nodeJS\4.path-module

//there are diffrent types of methods in path
console.log('file basename',path.basename(__filename)); // 1.index.js
console.log('dir basename',path.basename(__dirname)); //4.path-module

console.log('Extension: ',path.extname(__filename))// .js

console.log('parse obj dir: ', path.parse(__dirname)); 
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Ansa Ali\\OneDrive\\Desktop\\nodeJS',
//     base: '4.path-module',
//     ext: '.path-module',
//     name: '4'
//   }
console.log('parse obj file: ', path.parse(__filename));
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Ansa Ali\\OneDrive\\Desktop\\nodeJS\\4.path-module',     
//     base: '1.index.js',
//     ext: '.js',
//     name: '1.index'
//   }

console.log('format: ', path.format (path.parse(__filename)));
//C:\Users\Ansa Ali\OneDrive\Desktop\nodeJS\4.path-module\1.index.js 

console.log('is absolute: ', path.isAbsolute(__filename)) //true
console.log('is data in 5.file-module absolute: ', path.isAbsolute('../5.file-module'))//false

console.log(path.join('user','home','edit'))
// user\home\edit
console.log(path.join('/user','home','edit'))
// \user\home\edit

console.log(path.resolve('user','home','edit')) //give the absolute path from the root
// C:\Users\Ansa Ali\OneDrive\Desktop\nodeJS\4.path-module\user\home\edit
console.log(path.resolve('/user','home','edit')) //will give from the specifc path
// C:\user\home\edit
