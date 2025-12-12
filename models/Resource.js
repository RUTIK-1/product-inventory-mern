const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  status: { type: String, default: 'draft' },
  amount: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  deletedAt: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Resource', ResourceSchema);
