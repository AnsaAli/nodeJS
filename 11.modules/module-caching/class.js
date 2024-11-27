
//create a class and export it instance
class Profile{
    constructor(name){
        this.name = name;
    }

    //get name
    getName(){
        return this.name;
    }

    //set name
    setName(name){
        this.name = name;
    }
}

//export Profile class instance
 module.exports = new Profile('Ansa') //is module need to cach the result then export like this

