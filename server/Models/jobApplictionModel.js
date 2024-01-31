const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: Number,
    required: true
  },
  file: {
    type: String,
  },
  company:{
    type:String,
  },
  title:{
    type:String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'Pending'
  },
  jobId:{
    type:String,
  }
});

module.exports = mongoose.model('ApplyJobData', userSchema);
