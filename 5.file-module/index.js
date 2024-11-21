const fs = require("fs");
const path = require("path");

//define a folder and join
const dataFolder = path.join(__dirname, "data") //name of the flder data

//if data folder is not created, then create
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Data folder created')
}

//creating a file inside the data folder
const filePath = path.join(dataFolder, "example.txt");

//synhrouns way to create file
fs.writeFileSync(filePath, "Sync way of crated file");
console.log("File created")

const readContent = fs.readFileSync(filePath, "utf8");
console.log('Read from file:' , readContent);

fs.appendFileSync(filePath, "\nNew line added using appendFileSync");

//create files in async way
const asycFilePath = path.join(dataFolder, "async-exaple.txt");
fs.writeFile(asycFilePath, "File created in an asyn way",(err)=>{
    if(err) throw err;
    console.log('Async file created');

    //read file
    fs.readFile(asycFilePath, 'utf8', (err,data)=>{
        if(err) throw err;
        console.log('read file: ', data);

        //to add new line
        fs.appendFile(asycFilePath, '\nnew line added using appendFile', (err)=>{
            if(err) throw err;
        })
    })
})
