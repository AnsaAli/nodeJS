const EventEmitter = require('events');

//to extend this class to event emitter inherit from event
class Pizza extends EventEmitter{

    constructor(){
        super();
        this.ordernum = 0;
    }

    //emit an event
    order(sizeOfPizza,toppingsAdded){
        this.ordernum++;
        this.emit('order', sizeOfPizza, toppingsAdded)
    }

    display(){
        console.log(`order number is ${this.ordernum}`)
    }
}

module.exports = Pizza;