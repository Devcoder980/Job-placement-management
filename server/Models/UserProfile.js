const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: '',
    },
    experience: {
        type: String,
        default: '',
    },
    contact: {
        type: String,
        default: '',
    },
    skills: {
        type: [String],
        default: [],
    },
    education: {
        institute: {
            type: String,
            default: '',
        },
        duration: {
            type: String,
            default: '',
        },
        mode: {
            type: String,
            default: '',
        },
    },
    summary: {
        type: String,
        default: '',
    },
    resumeFileName: {
        type: String,
        default: '',
    },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
