const express = require('express');
const routes = express.Router();
const galleryCtl = require("../Controller/galleryCtl");
const multer = require('multer');
const path = require('path');
const GalleryModel=require('../Models/gallerySchema')

// Storage Configuration
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

// File Filter Function
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG and PNG files are allowed!"), false);
  }
};

// Multer Upload Middleware
const uploadsPic = multer({
  storage: Storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
  fileFilter: fileFilter
}).single("image");

routes.post("/addimage", uploadsPic, async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Invalid file type or size exceeded" });
  }

  const filter = req.body.filter || "none"; // Default filter
  const newImage = new GalleryModel({
    imagename: req.body.imagename,
    image: req.file.path,
    filter: filter, // Store filter in DB
  });

  try {
    await newImage.save();
    res.json({ msg: "Image added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save image" });
  }
});

routes.get("/viewgallery", galleryCtl.viewGallery);
routes.delete("/deleteimage", galleryCtl.deleteimages);

module.exports = routes;
