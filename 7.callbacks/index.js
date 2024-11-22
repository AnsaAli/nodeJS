
//ex of a simple call back function
function getPersonInfo(name,callbackFun){
     console.log(`Name is ${name}`);
     callbackFun();
}

function address(){
    console.log('From India')
}

getPersonInfo('Ansa', address);

//read file 
const fs = require('fs');
fs.readFile('input.txt',"utf8" ,(err,data)=>{
    if(err) throw err;
    console.log('Data from input.txt: ',data)
})
