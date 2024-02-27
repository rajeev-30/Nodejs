const http = require('http')
const fs = require('fs');
const url = require('url');

//Reading the data from the HTMl file and Storing it into the the example.txt file
const server = http.createServer((req,res)=>{
    // console.log(req.url);

    //parse the url into a object
    let parsedURL = url.parse(req.url, true);
    // console.log(parsedURL);
    // console.log(parsedURL.query);
    if(parsedURL.pathname=="/"){
        fs.readFile('formm.html','utf-8', (err,data)=>{
            if(err){
                res.end("There was some error reading file")
            }
            else{
                console.log(req.url);
                res.end(data);
            }
        });
    }
    //Wring the HTML data into the example.txt file
    else if(parsedURL.pathname=="/submit") {
        let data = JSON.stringify(parsedURL.query);
        fs.writeFile('example.txt',data,'utf-8',(err,data)=>{
            if(err){
                console.log(err);
                res.end("404 Not Found"+err);
            }else{
                res.end("success");
            }
        })
    }
}).listen(4000);