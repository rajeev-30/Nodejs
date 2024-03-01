// Q2 - Read the data form HTML file and write into a txt file

const express = require('express')
const fs = require('fs')
const app = express();
const url = require('url');

app.get('/', (req,res)=> {
    res.send('Server is ready to serve');
});

app.get('/readfile', (req,res)=> {
        fs.readFile('formm.html','utf-8', (err,data)=>{
            if(err){
                res.end("There was some error reading file")
            }
            else{
                console.log(req.url);
                res.end(data);
            }
        }); 
    });

// app.get('/submit',(req,res)=>{
//     let parsedURL = url.parse(req.url, true);
//     let data = JSON.stringify(parsedURL.query);
//     fs.writeFile('example.txt',data,'utf-8',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end("404 Not Found"+err);
//         }else{
//             res.end("success");
//         }
//     })
// })

app.get('/submit',(req,res)=>{
    const name = req.query.name;
    const email = req.query.email;
    fs.writeFile('example.txt',`Name: ${name}, Email: ${email}`,'utf-8',(err,data)=>{
        if(err){
            console.error("error");
            return;
        }
        res.send('Data saved successfully');
    })
})

const port = 4000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
