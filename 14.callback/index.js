function greet(name){
    console.log(`Hello ${name}`)
}

function higherOrder(callback){
    name1 = 'Ansa';
    callback(name1)
}

higherOrder(greet)