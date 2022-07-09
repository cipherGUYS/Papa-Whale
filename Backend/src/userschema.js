const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    dob: { type: String },
    level: { type: Number },
    coins: { type: Number }
})

module.exports = mongoose.model('User', userschema)