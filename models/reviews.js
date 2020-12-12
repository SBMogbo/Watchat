const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({

  user: {
    username: {
      type: String,
    },
    id: {
      type: String,
    }
  },

  reviewedMovieId: {
    type: String,
  },

  reviewedMovieTitle: {
    type: String,
  },

  reviewedMoviePoster: {
    type: String,
  },

  reviewTitle: {
    type: String,
  },

  review: {
    type: String,
  },

  recommendedMovieId: {
    type: String,
  },

  recommendedMovieTitle: {
    type: String,
  },

  recommendedMoviePoster: {
    type: String,
  },

})
const Review = mongoose.model('Reviews', reviews);

module.exports = Review;