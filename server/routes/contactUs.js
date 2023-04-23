const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();


const contactUs = require('../M/ContactusModel.js'); // Use the same variable name

//@desc post create user
//@route post /api/user/register
//@acces public
router.post('/contactus', asyncHandler(async (req, res) => {
  try {
    const { name, email,message,question } = req.body;
    const newContactUs = new contactUs({ name, email, message,question});
    const contact = await newContactUs.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Failed to register user', error: err });
  }
}));

module.exports = router;