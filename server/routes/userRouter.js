const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Add this line

const User = require('../Models/userModels.js'); // Use the same variable name

//@route post /api/user/register
//@acces public
router.post('/register', asyncHandler(async (req, res) => {
  try {
    const { firstname,lastname, email, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstname,lastname, email, password: hashedPassword });
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
    const token = jwt.sign({ email: user.email, userId: user._id }, 'secret', { expiresIn: '5h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Failed to login', error: err });
  }
}));

async function getUserById(userId) {
  try {
    const user = await User.findById(userId); // Find the user by ID
    if (!user) {
      // User not found
      throw new Error('User not found');
    }
    
    return user; // Return the user object
  } catch (err) {
    console.error(err);
    throw new Error('Failed to get user by ID');
  }
}


router.get('/', asyncHandler(async (req, res) => {
  try {
    // Get the token from the Authorization header
    const authToken = req.headers.authorization;
    if (!authToken) {
      // The token is missing
      return res.status(401).json({ message: 'Authentication failed: token missing' });
    }
    const token = authToken.split(' ')[1];
    // Decode and verify the token (you can use a library like jsonwebtoken for this)
    jwt.verify(token, 'secret', async (err, decoded) => {
      if (err) {
        // The token is invalid or expired
        console.log(err);
        return res.status(401).json({ message: err });
      } else {
        // The token is valid
        const userId = decoded.userId;
        const userdata = await getUserById(userId); // You will need to implement this function to get the user by ID
        console.log(userdata);
        res.json(userdata);
        console.log(decoded);
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err });
  }
}));


// Get all Details from admin user
// http://localhost:5000/api/user/adminuser
router.get('/adminuser', asyncHandler(async (req, res) => {
  const newUser = await User.find();
  res.status(200).json(newUser);
}))



module.exports = router;
