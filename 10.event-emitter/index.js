
//requite event module
const EventEmitter = require('events');

//create an event emitter
const myFirstEventEmitter = new EventEmitter();

//event emitter has 2 methods, on and emit
//register an event
myFirstEventEmitter.on('greet',(name)=>{
    console.log(`Grretings from event emitter to ${name}`)
})

//emit the event using emit method
myFirstEventEmitter.emit('greet','Ansa Ali');