

//create an express server
const express = require('express')

//create an express application, invoke
const app = express();

//using app we can access other methods
app.get('/',(req,res)=>{
    res.send('Hello from express')
})

//start the server
const port = 3000;
app.listen(port,()=>console.log('Server is running at 3000 port'))