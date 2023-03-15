const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  resume: { type: String } // file path to the resume
});

module.exports = mongoose.model('User', userSchema);
