const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Profile = require('../Models/UserProfile');
const jwt = require('jsonwebtoken');

async function getUserById(userId) {
    try {
        const user = await Profile.findById(userId); // Find the user by ID
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

router.get('/users', asyncHandler(async (req, res) => {
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
                // console.log(userdata);
                res.json(userdata);
                // console.log(decoded);
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users', error: err });
    }
}));



// User registration
router.post('/register', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            location,
            experience,
            contact,
            skills,
            education,
            summary,
            resumeFileName
        } = req.body;
        // Check if the email already exists
        const existingProfile = await Profile.findOne({ email });
        if (existingProfile) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        // Create a new profile
        const newProfile = new Profile({
            firstName,
            lastName,
            email,
            password,
            location,
            experience,
            contact,
            skills,
            education,
            summary,
            resumeFileName
        });
        // Save the profile to the database
        const savedProfile = await newProfile.save();
        res.status(201).json(savedProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


// User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = await Profile.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Check if the password is correct
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        // Generate a JWT token
        const token = jwt.sign({ email: user.email, userId: user._id }, 'secret', { expiresIn: '5h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


// Update a profile
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
            location,
            experience,
            contact,
            skills,
            education,
            summary,
            resumeFileName
        } = req.body;
        // Find the profile by ID
        const profile = await Profile.findById(id);
        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        // Update the profile fields
        profile.location = location;
        profile.experience = experience;
        profile.contact = contact;
        profile.skills = skills;
        profile.education = education;
        profile.summary = summary;
        profile.resumeFileName = resumeFileName;
        // Save the updated profile
        const updatedProfile = await profile.save();
        res.json(updatedProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router;
