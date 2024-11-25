

//create a promise
function delayFun(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Function delayed for 2 s')
        },2000)
    })
}

//create a async function to handle the promise
async function getFun(){
    const delay = await delayFun();
    console.log('start');
    console.log('calling in getFun: ', delay)
}

getFun();



//write a function for error handling
//create a promise
function division(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2 === 0) {
            reject('Divident cannot be zero')
        }else{
            resolve(num1/num2)
        }
    })
}

//handle promise in async
async function getResult(){
   
    try {
        const resu = await division(20,0);
        console.log('Result: ',resu)
    } catch (error) {
        console.log('Error: ',error)
    }
}
getResult()