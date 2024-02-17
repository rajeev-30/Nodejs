const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url==='/read'){
        fs.readFile('example.txt','utf8', (err,data)=>{
            if(err){
                res.end(err);
                return;
            }
            res.end(data);
        })
    }
    else {
        res.end('404 not found');
    }

    // if(req.url==='/write'){
    //     const msg = "Writing into file";
    //     const txt = "New txt been insterted";
    //     fs.writeFile('example.txt',txt,'utf8',(err,data)=>{
    //         if(err){
    //             res.end(err);
    //             return;
    //         }
    //         res.end(msg);
    //     })
    // }

    // if(req.url==='/append'){
    //     const msg = "new txt appended successfully";
    //     const newData = 'Appended text.';
    //     fs.appendFile('example.txt', newData, 'utf8', (err) => {
    //         if (err) {
    //           res.end('Error appending to file:', err);
    //           return;
    //         }
    //         res.end(msg);
    //     })
    // }
}).listen(4000);