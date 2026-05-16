const http = require("http");

const server = http.createServer((req, res) => {

    switch(req.method){

        case "GET":
            res.end("GET Request -> Fetching Data");
            break;

        case "POST":
            res.end("POST Request -> Creating Data");
            break;

        case "PUT":
            res.end("PUT Request -> Updating Complete Data");
            break;

        case "PATCH":
            res.end("PATCH Request -> Updating Partial Data");
            break;

        case "DELETE":
            res.end("DELETE Request -> Deleting Data");
            break;

        default:
            res.end("Invalid HTTP Method");
    }

});

server.listen(8000, () => {
    console.log("Server Started on Port 8000");
});