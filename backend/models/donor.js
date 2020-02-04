const mongoose = require('mongoose');

const donorSchema = mongoose.Schema({
  firstName:{
    String,
    required: true,
  },
  lastName:{
    String,
    required: true,
  },
  email:{
    String,
    required: false,
  },
  phoneNo:{
    String,
    required: false,
  },
  amount:{
    String,
    required: true,
  },
  timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('Donor', donorSchema);
