const express = require('express');
const router = express.Router();
const Job = require('../Models/jobModel.js');
const asyncHandler = require('express-async-handler');
const JobApplication = require('../models/jobApplictionModel');
// const auth = require('../middleware/authuser.js');

router.get('/jobs', asyncHandler(async (req, res) => {
  try {
    const { title, location, jobType, page = 1, limit = 30 } = req.query;
    const filters = {};

    if (title) {
      filters.title = { $regex: title, $options: 'i' };
    }
    if (location) {
      filters.location = { $regex: location, $options: 'i' };
    }
    if (jobType) {
      filters.jobType = { $regex: jobType, $options: 'i' };
    }

    const jobs = await Job.find(filters)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs', error: err });
  }
}));

router.get('/jobs/:company', asyncHandler(async (req, res) => {

  const { company } = req.params;

  try {
    const Jobs = await Job.find({ company: company });
    res.json(Jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch jobs', error: err });


  }

}));


router.post('/jobs', asyncHandler(async (req, res) => {
  const { title, company, location, sector, minSalary, maxSalary, description, requirements, lastDate, jobType } = req.body;
  // const createdBy = req.user._id; // assuming you have middleware that adds the user object to the request object
  const job = new Job({ title, company, location, sector, minSalary, maxSalary, description, jobType, lastDate, requirements });
  const savedJob = await job.save();
  res.status(201).json(savedJob);
}));

router.delete('/jobs/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete job', error: err });
  }
}));



module.exports = router;
