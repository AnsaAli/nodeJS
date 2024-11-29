const fs = require('fs/promises');

async function file(){
try {
    const data = await fs.readFile('../demo.txt', 'utf-8');
    console.log(data)
} catch (error) {
    console.log(error)
}    
}

file()