const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    numEmployees: {
        type: Number,
        required: true
    },
    isHiringManager: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const EmployerDetail = mongoose.model('EmployerDetail', jobSchema);

module.exports = EmployerDetail;
