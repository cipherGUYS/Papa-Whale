const express = require("express");
const cors = require('cors');
const session = require("express-session");
// const cookieParser = require("cookie-parser")

const db = require("./connection");
const User = require("./userschema");
const { edit } = require("./profile-edit");
const { create } = require("./create");

const app = express();

app.use(
    cors({
        origin: "*"
    })
);

app.use(
    session({
        secret: 'Secret',
        resave: true,
        saveUninitialized: true,
    })
);

app.get("/", (req, res) => {
    res.send({ "cipher": "GUYS" })
});

app.post("/signin", (req, res) => {
    const JSONData = {
        user: "reenphy"
    }
    req.session.user = JSONData.user;
    req.session.save();
    res.send({ Response: "SignedIN" });
});

app.post('/signup', (req, res) => {

    const JSONData = {
        "name": "oozman"
    }

    req.session.user = JSONData.name
    create(User, JSONData)
    res.send({ Response: "Success" })
});

app.get('/signout', (req, res) => {
    req.session.destroy();
    res.send({ Status: "Signed Out" })
})
app.post('/profile-edit', (req, res) => {
    const session = req.session.user

    const JSONdata = {
        "name": "Akash Vijay",
        "phone": "",
        "dob": null,
        "level": 2
    }

    edit(session, JSONdata, User);
    res.send({ Response: "Success" })
});

app.all('*', (req, res) => {
    res.send({ Response: "404" })
});

app.listen(5000, () => console.log("Server listening at port: 5000"))