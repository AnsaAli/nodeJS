
//create a instance
const profilename = require('./class');

console.log(profilename.getName()) //Ansa
//set the name
profilename.setName('Ali');
console.log(profilename.getName()) //Ali


//create another instance
const profilename2 = require('./class');
console.log(profilename2.getName())//Ali, because of module catching

