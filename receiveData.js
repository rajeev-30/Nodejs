
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
    // Serve HTML form
     const formPath = path.join(__dirname, 'public', 'form.html');
     fs.readFile(formPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.end(data);
     })
    }
})

//Read data from html file and save and show the data on the web page