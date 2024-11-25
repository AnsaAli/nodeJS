const fs = require('fs');

//read fron file input.txt
fs.readFile('input.txt','utf8',(err,data)=>{
    if(err) throw err;

    console.log('Read from the file input.txt:',data);

    //change input text to uppercase
    const modifyFile = data.toUpperCase()
    //write a new line to the file
    fs.writeFile('newInput.txt', modifyFile, (err)=>{
        if(err) throw err;
        console.log('New file newInput.txt created ');

        //read from the file newInput.txt
        fs.readFile('newInput.txt', 'utf8', (err,data)=>{
            if(err) throw err;

            console.log('Data from the file newInput.txt: ', data)
        })
    })
})