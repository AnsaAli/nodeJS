
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function divide(a,b){
    if(b === 0){
        throw new Error ('denominator value cannot be zero')
    }

    return a/b
}

module.exports={
    add,sub,divide
}