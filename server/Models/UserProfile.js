const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    education: {
        institute: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        mode: {
            type: String,
            required: true,
        },
    },
    summary: {
        type: String,
        required: true,
    },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
