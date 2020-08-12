const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// each schema contains multiple fields
const planSchema = new Schema({
  username: { type: String, required: true},
  description: { type: String, required: true},
  duration: { type: Number, required: true},
  date: { type: Date, required: true},
}, {
  timestamps: true,
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
