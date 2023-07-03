const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Enable file upload middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const fileName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

// POST endpoint for file upload
router.post('/', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file was uploaded.' });
    }

    // Access the uploaded file
    const uploadedFile = req.file;
    console.log(uploadedFile);

    // Move the file to the desired location (if needed)
    // Here, the file is already saved to the specified destination by Multer

    res.json({ message: 'File uploaded successfully.' });
});




// GET endpoint to download the uploaded file
router.get('/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, '../uploads', fileName);

    res.download(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(404).json({ message: 'File not found.' });
        }
    });
});

module.exports = router;
