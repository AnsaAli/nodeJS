//promise
Promise.resolve().then(() => {
  console.log("Promise cb 1");
});
Promise.resolve().then(() => {
  console.log("Promise cb 2");
  Promise.resolve().then(()=>{
    console.log('Promise cb nested 1');
    Promise.resolve().then(()=>{
        console.log('Promise cb nested 2');
        process.nextTick(()=> console.log('This is process.nexttick inside promise'))
    })
  })
});

//process.nexttick
process.nextTick(() => {
  console.log("process.next tick 1");
});
process.nextTick(() => {
  console.log("process.next tick 2");
  process.nextTick(() => {
    console.log("process.next tick nested 1");
    process.nextTick(() => {
      console.log("process.next tick nested 2");
    });
  });
});

//corresponding output
// process.next tick 1
// process.next tick 2
// process.next tick nested 1
// process.next tick nested 2
// Promise cb 1
// Promise cb 2
// Promise cb nested 1
// Promise cb nested 2
//This is process.nexttick inside promise