//require file module
const fs = require('fs');

console.log('start')
//read file in synchronous way
const data = fs.readFileSync('demo.txt', 'utf-8')
console.log(data)

//synch way to create a file
fs.writeFileSync('demosync.txt','File created using synchrs way')


//read file in an asynchronous way
fs.readFile('demo.txt', 'utf-8', (err,data)=>{
    if (err){
        console.log(err)
    }else{
        console.log(data)
    }
})

//file creating in async way
fs.writeFile('demoasync.txt', 'File craeted in async way', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File created')
    }
})
console.log('end')