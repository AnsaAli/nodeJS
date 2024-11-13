

const firstModule = require('./firstModule');

console.log('addition', firstModule.add(10,30));//addition 40

console.log('subtraction:', firstModule.sub(10,30))//subtraction: -20

try{
console.log('Dividing');
// console.log('division:', firstModule.divide(10,0));
console.log('division:', firstModule.divide(10,20));//division: 0.5

}catch(error){
 console.log('Error:',error.message); //denominator value cannot be zero.
 
}
