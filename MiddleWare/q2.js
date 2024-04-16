// Q2 - Read the data form HTML file and write into a .txt file using POST method

const express = require('express')
const fs = require('fs')
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=> {
    const readStream = fs.createReadStream('MiddleWare/form2.html');
    readStream.pipe(res);
})

app.post('/submit',(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    fs.writeFile('example.txt', name,email, (err) => {
        if (err) {
            console.error(err);
            res.send("check console");
        } else {
            res.send("data added successfully");
        }
    }); 
});  

const port = 4000;

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
});
