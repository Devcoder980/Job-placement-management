const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const EmployerDetail = require('../Models/EmployerModel');

// GET /api/jobs - get all jobs
router.get('/', asyncHandler(async (req, res) => {
    try {
        const jobs = await EmployerDetail.find();
        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));

// POST /api/jobs - create a new job
router.post('/', asyncHandler(async (req, res) => {
    try {
        const { companyName, numEmployees, isHiringManager, phone, email, password } = req.body;

        // Check if email already exists
        const existingJob = await EmployerDetail.findOne({ email });
        if (existingJob) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new job object with the hashed password
        const job = new EmployerDetail({
            companyName,
            numEmployees,
            isHiringManager,
            phone,
            email,
            password: hashedPassword
        });
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));

// GET /api/jobs/:id - get a single job by ID
router.get('/:id', asyncHandler(async (req, res) => {
    try {
        const job = await EmployerDetail.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));

// PUT /api/jobs/:id - update a job by ID
router.put('/:id', asyncHandler(async (req, res) => {
    try {
        const job = await EmployerDetail.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));

// DELETE /api/jobs/:id - delete a job by ID
router.delete('/:id', asyncHandler(async (req, res) => {
    try {
        const job = await EmployerDetail.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json({ message: 'Job deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));

module.exports = router;
