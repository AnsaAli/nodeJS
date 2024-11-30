setTimeout(() => {
  console.log("settimeout 1");
}, 0);
setTimeout(() => {
  console.log("settimeout 2");
}, 0);

setTimeout(() => {
    console.log("settimeout 3");
    process.nextTick(()=> console.log('From process.nextTick inside settimeout 3'))
  }, 0);
  setTimeout(() => {
    console.log("settimeout 4");
  }, 0);


Promise.resolve().then(()=> {console.log('From promise 1');
    process.nextTick(()=> console.log('From process.nextTick inside the promise'))
})

process.nextTick(()=>{
    console.log('From process.nextTick 1');
    Promise.resolve().then(()=> console.log('From Promise inside the process.nextTick'))
});
process.nextTick(()=> console.log('From process.nexttick 2'));


//corres output
// From process.nextTick 1
// From process.nexttick 2
// From promise 1
// From Promise inside the process.nextTick
// From process.nextTick inside the promise
// settimeout 1
// settimeout 2
// settimeout 3
// From process.nextTick inside settimeout 3
// settimeout 4
