const path = require("path");


// Current file and folder
console.log("File Name:");
console.log(__filename);

console.log("\nFolder Name:");
console.log(__dirname);


// basename() -> file name
console.log("\nBasename:");
console.log(path.basename(__filename));


// extname() -> extension
console.log("\nExtension Name:");
console.log(path.extname(__filename));


// dirname() -> directory name
console.log("\nDirectory Name:");
console.log(path.dirname(__filename));


// join() -> joins paths
const joinedPath = path.join(__dirname, "files", "test.txt");

console.log("\nJoined Path:");
console.log(joinedPath);


// resolve() -> absolute path
const resolvedPath = path.resolve("test.txt");

console.log("\nResolved Path:");
console.log(resolvedPath);


// parse() -> converts path into object
const parsedPath = path.parse(__filename);

console.log("\nParsed Path:");
console.log(parsedPath);


// format() -> object to path
const formattedPath = path.format({
    dir: "C:/Users/Suman/Documents",
    base: "app.js"
});

console.log("\nFormatted Path:");
console.log(formattedPath);


// isAbsolute() -> checks absolute path
console.log("\nIs Absolute Path?");
console.log(path.isAbsolute(__filename));
