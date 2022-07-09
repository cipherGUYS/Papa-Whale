const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

module.exports = db;