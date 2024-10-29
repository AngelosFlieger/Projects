// Event.js
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true
  },
  imageUrl: {
    type: String, // This will store the URL for the uploaded image
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
