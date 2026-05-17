//Routing means deciding what response should be given when a user visits a specific URL.
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From Home Page\n");
});

app.get("/about", (req, res) => {
    return res.send("Hello From about Page" + " hey\n " + req.query.name);
});

app.listen(8000 ,()=>{
    console.log("Server is Running...");
});

