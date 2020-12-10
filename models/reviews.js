const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({

  userId: {
    type: String,
  },

  movieId: {
    type: String,
  },

  poster: {
    type: String,
  },
  
  movieTitle: {
    type:String,
  },

  reviewTitle: {
    type: String,
  },

  review: {
    type: String,
  },
  
  recommendationId: {
    type: String,
  },
})
const Review = mongoose.model('Reviews', reviews);

module.exports = Review;