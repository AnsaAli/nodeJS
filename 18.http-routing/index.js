const http = require('http');

const server = http.createServer((req,res)=>{
    //will get the url from req.url
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        let otp = Math.floor( Math.random() * 90000)
        res.end(otp.toString())
    }else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify({name : 'This is about page'}))
    }else{
        res.writeHead(404);
        res.end('Page not found')
    }
});

server.listen(3000,()=>console.log('server is running'))