//in node-package-manger folder terminal npm init -y , npm i lodash
//in package.json add start : node index.js



const names = ['aa', 'bb','cc'];

const capitalName  = names.map((na)=>na.toUpperCase());
console.log(capitalName) //[ 'AA', 'BB', 'CC' ]