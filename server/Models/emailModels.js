var nodemailer = require('nodemailer');
var fs = require('fs');
var path = require('path');

var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'vivot25g@outlook.com',
        pass: 'Pass#$$5g'
    }
});

var htmlFilePath = path.join(__dirname, '..', 'dumydata', 'newslettermodle.html');
var htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

var mailOptions = {
    from: 'vivot25g@outlook.com',
    to: 'devcoder2323@gmail.com',
    
};

module.exports = { transporter, mailOptions };
