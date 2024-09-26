const mongoose = require("mongoose");

const userInfo = new mongoose.Schema({
    name:String,
    email: String
});


module.exports = mongoose.model('User', userInfo);