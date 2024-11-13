const path = require('path')

console.log("Directory name:", path.dirname(__filename));
//Directory name: C:\Users\Ansa Ali\OneDrive\Desktop\nodeJS\4.path-module

console.log("FIle name: ", path.basename(__filename));
//FIle name:  index.js 

const joinPath = path.join("/user","documents","node");
console.log("Join path: ", joinPath);
//Join path:  \user\documents\node

const resolvePath = path.resolve("user","documents" ,"node");
console.log("Resolve path: ",resolvePath);
//Resolve path:  C:\Users\Ansa Ali\OneDrive\Desktop\nodeJS\4.path-module\user\documents\node

const normalizePath = path.normalize("/user/document/../node/projects");
console.log('Normalized path:', normalizePath) //Normalized path: \user\node\projects 
//it will simplifies the path