const express = require("express");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());


// CLIENT SIDE STATUS CODES 

// 200 OK
app.get("/status", (req, res) => {

    return res.status(200).json({
        success: true,
        message: "200 OK - Request Successful"
    });

});

// 201 Created
app.post("/status", (req, res) => {

    return res.status(201).json({
        success: true,
        message: "201 Created - New Resource Created"
    });

});

// 202 Accepted
app.patch("/status", (req, res) => {

    return res.status(202).json({
        success: true,
        message: "202 Accepted - Request Accepted"
    });

});



//SERVER SIDE / CLIENT ERROR STATUS CODES

// 400 Bad Request
app.get("/bad-request", (req, res) => {

    return res.status(400).json({
        success: false,
        message: "400 Bad Request - Invalid Data Sent"
    });

});

// 401 Unauthorized
app.get("/unauthorized", (req, res) => {

    return res.status(401).json({
        success: false,
        message: "401 Unauthorized - Login Required"
    });

});

// 403 Forbidden
app.get("/forbidden", (req, res) => {

    return res.status(403).json({
        success: false,
        message: "403 Forbidden - Access Denied"
    });

});

// 404 Not Found
app.get("/not-found", (req, res) => {

    return res.status(404).json({
        success: false,
        message: "404 Not Found - Route Does Not Exist"
    });

});

// 500 Internal Server Error
app.get("/server-error", (req, res) => {

    return res.status(500).json({
        success: false,
        message: "500 Internal Server Error - Something Went Wrong"
    });

});



// Start Server
app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
});