const fs = require('fs');

const writableStream = fs.createWriteStream('example.txt');

// const data = ['Hello world!\n', 'This is a test\n'];
const data = ['Hello world!\n'];
data.forEach(chunk => {
    writableStream.write(chunk);
});

writableStream.end();