const http = require('http');

//create server
const server = http.createServer((req,res)=>{
    
    //access url from req
    const url = req.url;

    //add diffrent routes
    if(url === '/home'){
        res.writeHead(200,{"content-type": "text/plain"});
        res.end("Home Page")
    }else if(url === '/about'){
        res.writeHead(200, {"content-type": "text/pain"});
        res.end("About page")
    }else{
        res.writeHead(404, {"content-type":"text/plain"});
        res.end('Page not found')
    }
});

const port = 3000;
server.listen(port, ()=> console.log('server connected on port 3000'))