const Pizza = require('./pizza-shop');

//create an instance
const pizza = new Pizza();

//attach the event listener, this particular listener will recieve size and toppings
pizza.on('order',(size,toppings)=>{
    console.log('pizza size is ', size, ' and the topings are',toppings)
});

//place the order
pizza.order('large', 'olives');
pizza.display();