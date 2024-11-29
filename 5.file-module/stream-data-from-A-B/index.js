const fs = require('fs');

//create a readable stream using createreadstream method
const readableStream = fs.createReadStream('./fileA.txt',{
    encoding : 'utf-8'
})

//create a writable straem to transfer the data from fileA to fileB(which is empty at the begening)
const writableStream = fs.createWriteStream('./fileB.txt');

//streams extends from the emitter class, readableStream will emit a data which we can listen
readableStream.on("data",(chunk)=>{
    console.log(chunk);
    //once we get the data write in fileB using writableStream
    writableStream.write(chunk)
})
