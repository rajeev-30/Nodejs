const http= require("http");
const fs=require("fs");
const zlib = require('zlib');

const server = http.createServer((req, res) =>{
    if(req.url === '/') {
        fs.readFile('example.txt', (err, data) => {
            if (err) {
                res.end('Internal Server Error');
            } else {
                //Compress the data
                zlib.gzip(data, (err, cmopressedData)=>{
                    if(err){
                        console.error("Error eompressing the data ",err);
                        return;
                    }
                    // console.log(cmopressedData);
                    res.writeHead(200, {
                        'Content-Type': 'text/plain',
                        'Content-Encoding': 'gzip'
                    });
                    res.end("Compressed data: ",cmopressedData);
                });
            }
        });
    } 
});
const port = 4000;
server.listen(port,() => console.log(`Server running at http://localhost:${port}`));