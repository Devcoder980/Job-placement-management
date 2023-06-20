const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { transporter, mailOptions } = require('../Models/emailModels');

router.post('/newsletter', asyncHandler(async (req, res) => {
    try {
        const { email } = req.body;
        mailOptions.to = email;
        
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).json({ message: 'Email sending failed' });
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ message: 'Email sent successfully' }); // Send response back to the API
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));



module.exports = router;
