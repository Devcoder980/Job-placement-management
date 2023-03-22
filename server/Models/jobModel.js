const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  minSalary: {
    type: Number,
    required: true,
  },
  maxSalary:{
    type:Number,
    required:false,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  createdDate:{
    type: Date,
    default: Date.now,
  },
  lastDate: {
    type: Date,
    required:false,
  },
  jobType:{
    type:String,
    required:false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
});

// jobSchema.statics.countJobsForUser = async function(userId) {
//   const count = await this.countDocuments({ createdBy: userId });
//   return count;
// };

// jobSchema.pre('save', async function() {
//   const job = this;
//   const userJobCount = await job.constructor.countJobsForUser(job.createdBy);
//   if (userJobCount >= 3) {
//     throw new Error('You can only create up to three jobs');
//   }
// });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
