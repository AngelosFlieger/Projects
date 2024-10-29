// config/multer.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'event_images', // Specify the folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // Specify allowed formats
  },
});

const upload = multer({ storage });

module.exports = upload;
