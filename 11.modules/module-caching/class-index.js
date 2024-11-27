//if we are exporting the class itself then
const Profile = require('./class-expots');

const profilename = new Profile('Ansa');

console.log(profilename.getName())//Ansa
profilename.setName('Ali')
console.log(profilename.getName())//Ali

//craeting another instance
const profilename2 = new Profile('ANBC');
console.log(profilename2.getName())//ANBC