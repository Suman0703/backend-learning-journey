const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Routes

//html Client Side Rendering
app.get('/users', (req, res) => {

    const html = `
    <ul>
        ${users.map((user) => {
        return `
                <li>${user.first_name}</li>
            `;
    }).join("")}
    </ul>
    `;

    res.send(html);
});


//JSON data
app.get('/api/users', (req, res) => {
    return res.json(users);
});

//Dynamic Path
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     return res.json(user);
// });


//Create New user
app.post('/api/user', (req, res) => {
    return res.json({ Status: "pending" })
});

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);
}
).patch((req, res) => {
    //edit user route
    res.json({ Status: Pending })
}
).delete((req, res) => {
    //delete user route
    res.json({ Status: Pending })
}
);

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
});