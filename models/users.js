const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  md5Password: {
    type: String,
    required: true,
  },

  profileImage: {
    type: String,
  },

});

const User = mongoose.model('Users', users);

module.exports = User;