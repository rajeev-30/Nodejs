const http = require('http');;
const fs = require('fs');

const EventEmmiter = require('events');
const myEmmiter = new EventEmmiter();


const server = http.createServer((req,res) =>{
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.writeHead(200, {'Content-type': 'text/plain'});
        // res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('File Content: '+data);
    })

myEmmiter.emit('firstevent','hello','hii');

myEmmiter.on('firstevent', (arg1,arg2) => {
    console.log('Event Occured: ',arg1,arg2);
})
// res.end('end');
});

const port = 4000;
server.listen(port,()=> {
    console.log(`server is running at http://localhost:${port}`);
})