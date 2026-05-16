const fs = require("fs");

// Syc call 
// ./ means under 
// fs.writeFileSync('./test.txt','hey there  .... !!');


//Async 
// fs.writeFile('./test.txt','hey there  ....It is a Async Call !!',(err)=>{});

//Read File Sync Call
// const result = fs.readFileSync("./test.txt","utf-8");
// console.log(result);


//Read File Async Call - non blocking req
// fs.readFile("./test.txt","utf-8",(err,result)=>{
// if(err){
//     console.log("Error",err); 
// } else {
//     console.log(result);  
// }
// });


//Append data into file

//Sync"
// fs.appendFileSync('./test.txt','\nIt is a sync Call to append data into the file !!');
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString());/

//copy file
// fs.copyFileSync("./test.txt","./copy.txt");

//Delete a file 
// fs.unlinkSync("./copy.txt");


//to check statics of file 
console.log(fs.statSync("./test.txt"));