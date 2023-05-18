var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
  "userId":String,
  "userName":String,
  "userPwd":String,
},{
  usePushEach: true
  });

module.exports = mongoose.model("Admin",adminSchema);