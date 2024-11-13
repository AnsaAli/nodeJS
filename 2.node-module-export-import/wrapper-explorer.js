

console.log('Node module wrapper function'); //will print first, when  node wrapper-demo.js 

console.log('__filename:', __filename);
console.log('__dirname:', __dirname);

module.exports.greet = function(name){
    console.log(`Hello ${name}`);
    
}

