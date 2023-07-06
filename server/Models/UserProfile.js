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
        required: false,
    },
    experience: {
        type: String,
        required: false,
    },
    contact: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    skills: {
        type: [String],
        required: false,
    },
    education: {
        institute: {
            type: String,
            required: false,
        },
        duration: {
            type: String,
            required: false,
        },
        mode: {
            type: String,
            required: false,
        },
    },
    summary: {
        type: String,
        required: false,
    },
    resumeFileName: {
        type: String,
        required: false,
    },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
