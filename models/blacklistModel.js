const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
  blacklistedToken: String,
}, {
  versionKey: false,
});

const blacklistedTokenModel = mongoose.model('blacklistedToken', blacklistSchema);

module.exports = { 
  blacklistedTokenModel 
};