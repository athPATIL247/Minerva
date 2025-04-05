const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const File = require('../models/File');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
    try {
      const fileBuffer = fs.readFileSync(req.file.path);
      const data = await pdfParse(fileBuffer);
  
      const newFile = new File({
        filename: req.file.originalname,
        originalname: req.file.originalname,
        contentType: req.file.mimetype,
        size: req.file.size,
        textContent: data.text,
        userId: req.user.id,
      });
  
      await newFile.save();
      fs.unlinkSync(req.file.path); // Clean up temp file
  
      res.json({ message: 'File uploaded and parsed', file: newFile });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to process file', error: err.message });
    }
  });  

module.exports = router;
