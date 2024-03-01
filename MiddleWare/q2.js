// Q2 - Read the data form HTML file and write into a txt file using POST method

const express = require('express')
const fs = require('fs')
const app = express();
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=> {
    res.send('Server is ready to serve');
});

app.get('/readfile', (req,res)=> {
        fs.readFile('MiddleWare/form2.html','utf-8', (err,data)=>{
            if(err){
                res.end("There was some error reading file")
            }
            else{
                console.log(req.url);
                res.end(data);
            }
        }); 
    });

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
