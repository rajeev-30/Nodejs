const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=> {
        if(req.url==='/'){
            const readableStream = fs.createReadStream('example.txt','utf8');
            readableStream.pipe(res);
            readableStream.on('end', ()=>{
                 res.end();
            })
        }
}).listen(4000);

console.log('Server is running at http://localhost:4000');
