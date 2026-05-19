const express = require("express");

const app = express();
const PORT = 8000;

// middleware
app.use(express.json());



// home route
app.get("/", (req, res) => {

    return res.status(200).json({
        success: true,
        message: "Welcome to Error Handling Tutorial"
    });

});



// try catch error
app.get("/try-catch", (req, res) => {

    try {

        let a = 10;
        let b = 0;

        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }

        let result = a / b;

        return res.status(200).json({
            success: true,
            result
        });

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

});



// manual error
app.get("/manual-error", (req, res, next) => {

    const error = new Error("This is a manually generated error");

    next(error);

});



// validation error
app.post("/register", (req, res, next) => {

    const { name, email } = req.body;

    if (!name || !email) {

        const error = new Error("Name and Email are required");
        error.statusCode = 400;

        return next(error);

    }

    return res.status(201).json({
        success: true,
        message: "User Registered Successfully"
    });

});



// async error
app.get("/async-error", async (req, res, next) => {

    try {

        const user = await Promise.reject("Database Connection Failed");

        return res.status(200).json({
            success: true,
            user
        });

    }
    catch (error) {

        next(error);

    }

});



// not found route
app.use((req, res, next) => {

    const error = new Error("Route Not Found");
    error.statusCode = 404;

    next(error);

});



// global error handler
app.use((error, req, res, next) => {

    return res.status(error.statusCode || 500).json({

        success: false,

        message: error.message || "Internal Server Error"

    });

});



// server
app.listen(PORT, () => {

    console.log(`Server started at PORT:${PORT}`);

});