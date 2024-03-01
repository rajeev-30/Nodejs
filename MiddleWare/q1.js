const express = require('express');
const fs=require("fs");
const app = express();
const d = new Date();

app.use((req, res, next) => {
    fs.appendFile('example.txt', `${d.toISOString()}`, 'utf8', (err,data)=>{
        if(err){
            console.log("error");
            return;
        }
        res.send("Done");
    })
    next();
})

app.get('/', (req, res) => {
    res.end("Hello world!");
})

const port = 4000;
app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
