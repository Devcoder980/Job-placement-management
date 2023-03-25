const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const EmployerDetail = require('../Models/EmployerModel');
const jwt = require('jsonwebtoken'); // Add this line
// // GET /api/jobs - get all jobs
// router.get('/', asyncHandler(async (req, res) => {
//     try {
//         const jobs = await EmployerDetail.find();
//         res.json(jobs);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// }));

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

router.post('/login', asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await EmployerDetail.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ email: user.email, userId: user._id }, 'secret', { expiresIn: '5h' });
        res.status(200).json({ token });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Failed to login', error: err });
    }
}));

//get employer

async function getUserById(userId) {
    try {
        const user = await EmployerDetail.findById(userId); // Find the user by ID
        if (!user) {
            // User not found
            throw new Error('User not found');
        }

        return user; // Return the user object
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get user by ID');
    }
}


router.get('/', asyncHandler(async (req, res) => {
    try {
        // Get the token from the Authorization header
        const authToken = req.headers.authorization;
        if (!authToken) {
            // The token is missing
            return res.status(401).json({ message: 'Authentication failed: token missing' });
        }
        const token = authToken.split(' ')[1];
        // Decode and verify the token (you can use a library like jsonwebtoken for this)
        jwt.verify(token, 'secret', async (err, decoded) => {
            if (err) {
                // The token is invalid or expired
                console.log(err);
                return res.status(401).json({ message: err });
            } else {
                // The token is valid
                const userId = decoded.userId;
                const userdata = await getUserById(userId); // You will need to implement this function to get the user by ID
                console.log(userdata);
                res.json(userdata);
                console.log(decoded);
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users', error: err });
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
