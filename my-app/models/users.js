const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
  userName: {
    type: String,
    required: true,
  },

  md5Password: {
    type: String,
    required: true,
  },

  watched: {
    type: Array,
    movies: [{
      id: {
        type: String,
      },
    },
    ]
  },

  toWatch: {
    type: Array,
    movies: [
      {
        id: {
          type: String,
        },
      },
    ]
  },

  reviews: {
    type: Array,
    movies: [
      {
        id: {
          type: String,
        },
        reviewTitle: {
          type: String,
        },
        review: {
          type: String,
        },
        recommendationId: {
          type: String,
        }
      }
    ]
  }
});

const User = mongoose.model('Book', users);

module.exports = User;
