const express = require('express');
const router = express.Router();
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');

// Configure nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'outlook', // Replace with your email service (e.g., Gmail, Outlook, etc.)
    auth: {
        user: 'archan458768@outlook.com', // Replace with your email address
        pass: 'Strong$@3456' // Replace with your email password
    }
});

router.post('/register/otp', (req, res) => {
    const { email } = req.body;
    // Generate a 6-digit OTP
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

    // Configure email message
    const mailOptions = {
        from: 'archan458768@outlook.com', // Replace with the sender's email address
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
