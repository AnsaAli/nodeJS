
//connection between binary data, charator sets and encoding to buffer
//buffer feature is a golbal feture, no need to import

//create a buffer
const buffer = new Buffer.from('Ansa');

console.log(buffer)//buffer contain row binary data 
//<Buffer 41 6e 73 61> it is the hexa decimal of base 16 , as priniting bytes will may flood with bytes.

console.log(buffer.toJSON()); //will be an object
//{ type: 'Buffer', data: [ 65, 110, 115, 97 ] }
//each numbers here are the unicode charator code for Ansa

console.log(buffer.toString()) //string reprsentaion of the binary data Ansa

//we can also write buffer data, but it will store only the length of initial data that is Ansa
buffer.write('Ali');
console.log(buffer.toString()) //Alia since Ansa has 4 and Ali will overwrite a 