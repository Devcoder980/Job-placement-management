const express = require('express');
const router = express.Router();
const Job = require('../Models/jobModel.js');
const asyncHandler = require('express-async-handler');
const JobApplication = require('../models/jobApplictionModel');
// const auth = require('../middleware/authuser.js');

router.get('/jobs', asyncHandler(async (req, res) => {
  try {
    const { title, location, industry, salaryRange } = req.query;
    const filters = {};

    if (title) {
      filters.title = { $regex: title, $options: 'i' };
    }
    if (location) {
      filters.location = { $regex: location, $options: 'i' };
    }
    if (industry) {
      filters.industry = { $regex: industry, $options: 'i' };
    }
    if (salaryRange) {
      const [minSalary, maxSalary] = salaryRange.split('-');
      filters.salary = { $gte: minSalary, $lte: maxSalary };
    }

    const jobs = await Job.find(filters);
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs', error: err });
  }
}));


router.post('/jobs', asyncHandler(async (req, res) => {
  const { title, company, location, sector, minSalary,maxSalary, description, requirements ,lastDate,jobType} = req.body;
  // const createdBy = req.user._id; // assuming you have middleware that adds the user object to the request object
  const job = new Job({ title, company, location,sector,minSalary,maxSalary, description,jobType,lastDate, requirements });
  const savedJob = await job.save();
  res.status(201).json(savedJob);
}));



// router.post('/jobs/:id/apply', auth, asyncHandler(async (req, res) => {
//   const { resume, coverLetter } = req.body;
//   const job = await Job.findById(req.params.id);
//   if (!job) {
//     res.status(404).json({ message: 'Job not found' });
//   }
//   const application = await JobApplication.findOne({ job: job._id, user: req.user._id });
//   if (application) {
//     res.status(400).json({ message: 'You have already applied for this job' });
//   }
//   const newApplication = new JobApplication({
//     job: job._id,
//     user: req.user._id,
//     resume,
//     coverLetter
//   });
//   await newApplication.save();
//   res.status(201).json({ message: 'Job application submitted successfully' });
// }));



module.exports = router;
