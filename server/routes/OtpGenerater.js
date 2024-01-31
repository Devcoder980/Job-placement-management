const express = require('express');
const router = express.Router();
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const User = require('../Models/userModels.js'); // Use the same variable name

// Configure nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'outlook', // Replace with your email service (e.g., Gmail, Outlook, etc.)
    auth: {
        user: 'archanayadav2@outlook.com', // Replace with your email address
        pass: 'Strong@3456' // Replace with your email password
    }
});

router.post('/register/otp', async (req, res) => {
    const { email } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (user) {
        // User not found
        return res.status(404).json({ error: 'User Already Available email used' });
    }
    const otp = otpGenerator.generate(4, { digits: true, alphabets: false, specialChars: false });

    // Configure email message
    const mailOptions = {
        from: 'archanayadav2@outlook.com', // Replace with the sender's email address
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP for registration is: ${otp}`
    };

    // Send the email with the OTP
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending OTP:', error);
            res.status(500).json({ error: 'Failed to send OTP' });
        } else {
            console.log('OTP sent:', info.response);
            res.json({ otp });
        }
    });
});

module.exports = router;
