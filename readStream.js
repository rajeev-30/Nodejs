const fs = require('fs');
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8', highWaterMark: 65 });

readableStream.on('data', (chunk) => {
    console.log('Received chunk of data:');
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading data from the file');
});

readableStream.on('error', (err) => {
    console.log('Error reading data:', err);

})