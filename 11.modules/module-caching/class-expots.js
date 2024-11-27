//create a class and export it 
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

//if dont want module catching then
module.exports = Profile;