const express = require('express');
const router = express.Router();
const multer = require('multer');
const ApplyJobData = require('../Models/jobApplictionModel.js');

const Job = require('../Models/jobModel.js');

const path = require('path');

const uri = 'mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/user';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const fileName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await ApplyJobData.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:company', async (req, res) => {
    const { company } = req.params;

    try {
        const users = await ApplyJobData.find({ company: company });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST a new user
router.post('/', upload.single('file'), async (req, res) => {
    const { firstName, jobId, lastName, email, title, country, company, streetAddress, city, state } = req.body;

    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file was uploaded.' });
        }
        const uploadedFile = req.file;

        // Save the user data with the file ID
        const user = new ApplyJobData({
            firstName,
            lastName,
            email,
            country,
            streetAddress,
            city,
            company,
            state,
            title,
            file: uploadedFile.filename, // Set the file ID as a field in the user document
            jobId,
        });

        const newUser = await user.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// GET endpoint to download the uploaded file

router.get('/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, '../uploads', fileName);

    res.download(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(404).json({ message: 'File not found.' });
        }
    });
});


// GET user data and job application data by email
router.get('/email/:email', async (req, res) => {
    const { email } = req.params;

    try {
        // Find the user by email
        const user = await ApplyJobData.find({ email: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        // Extract job IDs from the user data
        // Extract job IDs from the user data
        const jobIds = user.map(user => user.jobId);

        const jobDetails = user.map(user => ({
            jobId: user.jobId,
            status: user.status,
            date: user.date
        }));

        // Find all job applications with the extracted job IDs
        const jobs = await Job.find({ _id: { $in: jobIds } });

        // Send the user data along with the list of job applications
        res.json({ jobDetails, jobs });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});






module.exports = router;
