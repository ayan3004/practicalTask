const mongoose = require('mongoose');

const GallerySchema = mongoose.Schema({
  imagename: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  filter: {
    type: String,
    default: "none" 
  }
});

const GalleryModel = mongoose.model("data", GallerySchema);

module.exports = GalleryModel;
