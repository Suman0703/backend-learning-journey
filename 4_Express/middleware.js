const express = require("express");
const app = express();
const PORT = 8000;

//middleware
app.use((req, res, next) => {
    console.log("Middleware is Running....");
    next();
});

// // Middleware Function
// function myMiddleware(req, res, next) {

//     console.log("Middleware Running");

//     next();
// }

// // Using Middleware
// app.use(myMiddleware);

app.get('/', (req, res, next) => {

    // const error = true;

    // if (error) {
    //     return next(new Error("Something Went Wrong"));
    // }

    res.send("Hey we are Learning middlewares");

});

// Error Handling Middleware
app.use((err, req, res, next) => {

    console.log(err.stack);

    res.status(500).json({
        message: "Something Went Wrong"
    });
});

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
});

