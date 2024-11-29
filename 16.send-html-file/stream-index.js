//import http module
const http = require('http');

//to get the file import fs module
const fs = require('fs');

//create server
const server = http.createServer((req,res)=>{
    //to send html content-type must be text/html
    res.writeHead(200, {'content-type': 'text/html'})
    fs.createReadStream('./index.html').pipe(res)
   
     
});

server.listen(3000,()=>console.log('server is running'))