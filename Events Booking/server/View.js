const mongoose = require('mongoose');

const ViewSchema = new mongoose.Schema({
  eventID: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo', required: true }, 
  gender: { type: String, required: true },
  city: { type: String, required: true },
  view_time: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('View', ViewSchema);
