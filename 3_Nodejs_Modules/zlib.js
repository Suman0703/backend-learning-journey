// Zlib compresses files and reduces file size
const fs = require("fs");
const zlib = require("zlib");

// Creates readable stream from file
const readStream = fs.createReadStream("test.txt");

// Creates writable stream for compressed file
const writeStream = fs.createWriteStream("test.txt.gz");

// Creates gzip compressor
const gzip = zlib.createGzip();

// Compresses file
readStream.pipe(gzip).pipe(writeStream);

console.log("File Compressed Successfully");


// // Compresses string
// const text = "Hello Node.js";

// // Compress
// zlib.gzip(text, (err, compressedData) => {

//     console.log("Compressed:");
//     console.log(compressedData);

//     // Decompress
//     zlib.gunzip(compressedData, (err, originalData) => {

//         console.log("\nDecompressed:");
//         console.log(originalData.toString());

//     });

// });


// // Decompressing a file
// // Reads compressed file
// const readStream = fs.createReadStream("test.txt.gz");

// // Creates output file
// const writeStream = fs.createWriteStream("uncompressed.txt");

// // Creates decompressor
// const gunzip = zlib.createGunzip();

// // Decompresses file
// readStream.pipe(gunzip).pipe(writeStream);

// console.log("File Decompressed Successfully");