const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


// HTML Client Side Rendering
app.get("/users", (req, res) => {

    const html = `
    <ul>
        ${users
            .map((user) => {
                return `
                    <li>${user.first_name}</li>
                `;
            })
            .join("")}
    </ul>
    `;

    res.send(html);
});

// Get All Users (JSON Data)
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// Dynamic Path
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);

//     return res.json(user);
// });


// Create New User
app.post("/api/users", (req, res) => {

    const body = req.body;
    users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {

        return res.json({
            status: "Success", id: users.length
        });
    });

});

// Routes for Single User
app.route("/api/users/:id")

    // Get User By ID
    .get((req, res) => {

        const id = Number(req.params.id);

        const user = users.find((user) => user.id == id);

        return res.json(user);
    })

    // Update User
    .patch((req, res) => {

        const body = req.body;
        const id = Number(req.params.id);

        const user = users.find((user) => user.id == id);

        users[users.indexOf(user)] = {
            ...user,
            ...body
        };

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {

            return res.json({
                status: "Success Data is updated",
                id: users.length
            });
        });
    })

    // Delete User
    .delete((req, res) => {

        const id = Number(req.params.id);

        const user = users.find((user) => user.id == id);

        users.splice(users.indexOf(user), 1);

        // Delete user route
        return res.json({
            status: "User's Data Deleted Successfully",
        });
    });


// Start Server
app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
});