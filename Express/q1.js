//Read data from txt file

const express = require('express')
const fs = require('fs')
const app = express();

app.get('/', (req,res)=> {
    res.send('Server is ready to serve');
});

app.get('/readfile', (req,res)=> {
    fs.readFile('example.txt','utf8', (err,data)=>{
        if(err){
            res.send(err);
            return;
        }
        res.send(data);
    })
});

const port = 4000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
