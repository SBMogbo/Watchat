const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
  userName: {
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
    type:String,
  },

  watched: {
    type: Array,
    movies: [
      {
        id: String,
        poster: String,
      },
    ]
  },

  toWatch: {
    type: Array,
    movies: [
      {
        id: String,
        poster: String,
      },
    ]
  },

  reviews: {
    type: Array,
    movies: [
      {
        id: String,
        poster: String,
        reviewTitle: String,
        review: String,
        recommendationId: String,
      }
    ]
  }
});

const User = mongoose.model('Users', users);

module.exports = User;