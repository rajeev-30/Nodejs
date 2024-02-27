const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// Define the path to the text file
const filePath = 'path/to/your/text/file.txt';

// Read the content of the text file
const fileContent = fs.readFileSync(filePath, 'utf8');

// Compress the file content with gzip
const compressedContent = zlib.gzipSync(fileContent);

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Encoding': 'gzip'
    });

    // Serve the compressed file content
    res.end(compressedContent);
});

// Set up server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    // console.log(⁠Server is running on http://localhost:${PORT} ⁠);
});