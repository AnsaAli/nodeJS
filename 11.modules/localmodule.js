
console.log('in local module.js');

//create a local modul and require this in index.js
const add = (a,b)=>{
    return a+b;
}

const res = add(10,20);
console.log(res);

//we can exports the function which we want to sahre with other
const substract = (a,b)=>{
    return a-b
}
//export substarct
module.exports = substract;