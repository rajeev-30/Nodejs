const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('form.html', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Check Console");
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }


    //error in save-json
    if (req.url === "/save-json") {
        let body = "";
        req.on('data', (chunk) => {
            body = body + chunk;
            console.log(body);
        });

        req.on('end', () => {
            const convert = querystring.parse(body).data;
            console.log(convert);

            fs.writeFile('example.txt', convert, (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end("Check console");
                } else {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.end("Task done, check the file");
                }
            });
        });
    }

}).listen(4000);
