const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', 'utf8');
const writableStream = fs.createWriteStream('example2.txt', 'utf8');

//pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

writableStream.on('finish', ()=>{
    console.log('Data piped successfully from example.txt to example2.txt');
})