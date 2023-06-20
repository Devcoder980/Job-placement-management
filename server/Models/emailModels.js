var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');

var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'archan458768@outlook.com',
        pass: 'Strong$@3456'
    }
});

var htmlFilePath = path.join(__dirname, '..', 'dumydata', 'newslettermodle.html');
var htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

var mailOptions = {
    from: 'archan458768@outlook.com',
    to: 'devcoder2323@gmail.com',
    subject: 'Subject: Thank You for Subscribing to Our Newsletter - Our Job Management System',
    html: htmlContent
};

module.exports = { transporter, mailOptions };
