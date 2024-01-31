const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { transporter, mailOptions } = require('../Models/emailModels');
const ApplyJobData = require('../Models/jobApplictionModel');

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
router.post('/updateStatus/:id', asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const { selectedOption } = req.body;

        // Find the ApplyJobData document by id
        const application = await ApplyJobData.findById(id);

        if (!application) {
            return res.status(404).json({ message: 'Job application not found' });
        }

        // Update the status based on the selectedOption
        application.status = selectedOption;

        // Save the updated document
        await application.save();

        // Send email based on status
        if (selectedOption === 'accept') {
            // Send email to the user with accepted status
            mailOptions.to = application.email;
            mailOptions.subject = 'Your job application status';
            mailOptions.text = 'Congratulations! Your job application has been accepted.';
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        } else if (selectedOption === 'reject') {
            // Send email to the user with rejected status
            mailOptions.to = application.email;
            mailOptions.subject = 'Your job application status';
            mailOptions.text = 'We regret to inform you that your job application has been rejected.';
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }

        res.json({ message: 'Job application status updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}));

module.exports = router;