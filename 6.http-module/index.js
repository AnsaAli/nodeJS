const http = require('http');

//create server using http module
const server = http.createServer((req,res)=>{
    console.log('req:',req);
    res.writeHead(200, {'content-type' : "text/plain"});
    res.end("Hello nodejs")
})

//need to listen to a particular port
const port = 3000;
server.listen(port,()=>console.log('Server connected'))