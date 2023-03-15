const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Add this line

const User = require('../Models/userModels.js'); // Use the same variable name

//@desc post create user
//@route post /api/user/register
//@acces public
router.post('/register', asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    const contact = await newUser.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Failed to register user', error: err });
  }
}));

//@desc create Loggin user
//@route post /api/user/login
//@acces public
router.post('/login', asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const token = jwt.sign({ email: user.email, userId: user._id }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Failed to login', error: err });
  }
}));

router.get('/users', asyncHandler(async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch users', error: err });
    }
  }));

module.exports = router;
