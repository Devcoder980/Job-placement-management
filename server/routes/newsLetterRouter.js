const express = require('express');
const route = express.Router();

const asyncHandler = require('express-async-handler');
const newsLetter = require('../Models/newsLetter.js');

route.post('/newsletter', asyncHandler(async (req, res) => {
    const { email } = req.body;
    const newnewsletter = new newsLetter({ email });
    const saveNewsletter = await newnewsletter.save();
    res.status(201).json(saveNewsletter);
}))

route.get('/newsletter', asyncHandler(async (req, res) => {
    const newnewletter = await newsLetter.find();
    res.status(200).json(newnewletter);
}))
module.exports = route