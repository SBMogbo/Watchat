const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({
  reviews: {
    type: Array,
    movies: [
      {
        userId: String,
        movieId: String,
        poster: String,
        reviewTitle: String,
        review: String,
        recommendationId: String,
      }
    ]
  }
})
const Review = mongoose.model('Reviews', review);

module.exports = Review;