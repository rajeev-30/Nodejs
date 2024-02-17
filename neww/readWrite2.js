const http= require("http");
const fs=require("fs");
const server = http.createServer((req, res) =>{
    if(req.url==='/write'){
        const message = "Hiii i am Rajeevvvv";
        try{
            fs.writeFileSync('example.txt', message ,'UTF-8');
            res.end("File written successfully: ");
        } catch(err){
            console.log(err);
            res.end("404 Not Found"+err);
        }
    }

    if(req.url === '/') {
        fs.readFileSync('example.txt', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });
    } 
});
const port = 4000;
server.listen(port,() => console.log(`Server running at http://localhost:${port}`));