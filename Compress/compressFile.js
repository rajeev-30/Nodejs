const zlib = require('zlib');

const input = "Hello world!";


//Compress the data
zlib.gzip(input, (err, cmopressedData)=>{
    if(err){
        console.error("Error eompressing the data ",err);
        return;
    }
    // console.log(cmopressedData);
    console.log("Compressed data: ",cmopressedData.toString());

    //Decompress the data
    zlib.gunzip(cmopressedData, (err, decmopressedData)=>{
        if(err){
            console.log("Error decompressing the data", err);
            return;
        }
        console.log("Decompressing the data: ",decmopressedData.toString());
    });
});