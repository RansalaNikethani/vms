const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  fullName: String,
  nic: String,
  phone: String,
  email: String,
  company: String,
  purpose: String,
  divisionId: Number,
  divisionName: String,
  status: { type: String, default: 'Registered' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Visitor', visitorSchema);
