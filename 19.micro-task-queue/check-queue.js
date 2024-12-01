const fs = require('fs');

fs.readFile(__filename, ()=>{
    console.log('File reading');

    //check queue
    setImmediate(()=> console.log('From check queue '));

    process.nextTick(()=> console.log('From process.nextTick'));

    Promise.resolve().then(()=> console.log('From Promise'));

    setTimeout(()=>console.log('From timer'), 0)
})
Promise.resolve().then(()=> console.log('From Promise outside'))

//From Promise outside
// File reading
// From process.nextTick
// From Promise
// From check queue