const mongoose = require('mongoose');

let Schema = mongoose.Schema; // Create a mongoose schema
let Users = new Schema({
    email: { type: String },
    password: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: String },
    userName: { type: String }
});

let users = mongoose.model('Users', Users);

module.exports.users = users;
