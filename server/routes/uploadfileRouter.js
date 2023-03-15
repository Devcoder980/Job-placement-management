const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const asyncHandler = require('express-async-handler');
const User = require('../Models/userModels.js');

// configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ext);
  }
});

// create multer instance for file upload
const upload = multer({ storage });

// route for uploading resume file
router.post('/upload-resume', upload.single('resume'), asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id; // assuming you have middleware that adds the user object to the request object
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.resume = req.file.filename;
    await user.save();
    res.status(200).json({ message: 'Resume uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to upload resume', error: err });
  }
}));

module.exports = router;
