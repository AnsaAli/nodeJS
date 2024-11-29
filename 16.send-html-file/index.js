//import http module
const http = require('http');

//to get the file import fs module
const fs = require('fs');

//create server
const server = http.createServer((req,res)=>{
    //to send html content-type must be text/html
    res.writeHead(200, {'content-type': 'text/html'})

    //read html file, before loading the page it must read the file, thats why sync
    const htmlpage = fs.readFileSync('./index.html','utf-8')
    res.end(htmlpage)
});

server.listen(3000,()=>console.log('server is running'))