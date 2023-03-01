const express = require('express'); 
const app = express();
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
// app.use(express.static('./'));

app.get('/getData',(req,res)=>{
    var data = fs.readFile('./data.json',(err,data)=>{
        if(!err) {
            data = JSON.parse(data);
            return  res.json(data);
        }
    });
});

app.listen(port,hostName);