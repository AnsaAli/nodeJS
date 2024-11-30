
console.log('first')
process.nextTick(()=>console.log('From process.nextTick'))
console.log('second');
//corresponding output
// first
// second
// From process.nextTick

console.log('*****************************************')

Promise.resolve().then(()=> console.log('From promise'));
process.nextTick(()=> console.log('From process.nextTick'));
//corresponding output
// From process.nextTick
// From promise