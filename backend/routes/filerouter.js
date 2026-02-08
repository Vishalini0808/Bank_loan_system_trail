const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.middleware");
const File = require("../models/File");

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newFile = new File({
     
      fileName: req.file.filename,
      path: req.file.path,
      
    });

    await newFile.save();

    res.status(201).json({
      message: "File uploaded successfully",
      file: newFile
    });
  } catch (error) {
    res.status(500).json({
      message: "Upload failed",
      error: error.message
    });
  }
});

module.exports = router;
