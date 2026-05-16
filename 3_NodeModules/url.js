const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New request Received\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    

    // Ignore favicon request
    if(req.url == "/favicon.ico") return res.end();

    fs.appendFile('log.txt', log, (err) => {

        switch (myUrl.pathname) {

            case "/":
                const username = myUrl.query.myname
                res.end(`hi,${username}`);
               // http://localhost:8000/?myname=suman
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