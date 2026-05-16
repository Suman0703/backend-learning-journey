const http = require("http");
const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//     console.log("New request Received");
//     console.log(req);
//     res.end("Hello From Server");
// });

// myServer.listen(8000, () => {
//     console.log('Server Started!');

// })


const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New request Received\n`;

    fs.appendFile('log.txt', log, (err) => {
        switch (req.url) {
            case "/":
                res.end("Hello this is home page");
                break;
            case "/about":
                res.end("Hello this is about page");
                break;
            default:
                res.end("404 Page Not found");
        }

    });

});

myServer.listen(8000, () => {
    console.log('Server Started!');

});