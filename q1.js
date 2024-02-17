const http = require('http');;
const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8', highWaterMark: 65 });

let text;
readableStream.on('data', (chunk) => {
    console.log('Recieved chunk of data:');
    // console.log(chunk);
    text = chunk.toString();
});

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const fs = require('fs');
        const writableStream = fs.createWriteStream('example2.txt');
        const data = text;
        data.forEach(chunk => {
            writableStream.write(chunk);
        });

        writableStream.end();
    }
    if (req.url === '/read') {
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.writeHead(200, {'Content-type': 'text/plain'});
        // res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('File Content: '+data);
    })
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})