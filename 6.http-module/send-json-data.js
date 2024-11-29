const http = require('http');

const server = http.createServer((req,res)=>{
    const obj = {
        name : 'Ansa'
    }
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(obj))
})
//if we end like res.end(obj) will get error, always need to end in json not obj
server.listen(3000,()=> console.log('server is running'))
