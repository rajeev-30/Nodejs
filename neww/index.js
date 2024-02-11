const http = require('http');
const fs = require('fs');
// const server = http.createServer((req, res) => {
//     res.end('Hello, this is your Node.js server!');;
// });
// const server = http.createServer();

// const port = 3000;
// server.listen(port, ()=>{
//     console.log(`The server is running at http://localhost:${port}`);
// });


const server = http.createServer((req,res) => {
    if(req.url==="/"){
        const msg = " writing into file";

        fs.writeFile('example.txt', 'utf8', (err, data) => {
            if(err){
                console.log(err);
                res.writehead('content-type', 'text/plain');
                res.end("Error");
                return;
            }
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('File Content:'+msg);
        })
    }

    if(req.url=="/"){
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('File Content:'+data);
        })
    }
    
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`The server is running at http://localhost:${port}/`);
})
