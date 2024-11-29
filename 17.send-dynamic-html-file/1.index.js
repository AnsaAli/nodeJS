const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const name ='Ansa';
    res.writeHead(200, {'content-type': 'text/html'})
    let htmlpage = fs.readFileSync('./1.index.html', 'utf-8')
    //update name in the html page using replace
    const updatedHtmlPage = htmlpage.replace('{{name}}', name);
    res.end(updatedHtmlPage)
});

server.listen(3000, ()=> console.log('server is running'))