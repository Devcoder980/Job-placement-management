const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    resume: { type: String, required: false } // file path to the resume
});

module.exports = mongoose.model('Admin', userSchema);