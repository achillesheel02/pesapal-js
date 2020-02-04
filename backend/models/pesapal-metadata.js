const mongoose = require('mongoose');

const pesapalSchema = mongoose.Schema({
  consumerKey: {
    type: String,
    required:true,
  },
  consumerSecret: {
    type: String,
    required:true,
  }
});

module.exports = mongoose.model('MetaData', pesapalSchema);
