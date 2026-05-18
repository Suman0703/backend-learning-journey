const express = require("express");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// 200 OK
app.get("/status", (req, res) => {

    return res.status(200).json({
        message: "200 OK - Request Successful"
    });

});

// 201 Created
app.post("/status", (req, res) => {

    return res.status(201).json({
        message: "201 Created - New Resource Created"
    });

});

// 202 Accepted
app.patch("/status", (req, res) => {

    return res.status(202).json({
        message: "202 Accepted - Request Accepted"
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
});