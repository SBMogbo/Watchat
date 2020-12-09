const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({
  reviews: {

    userId: String,
    movieId: String,
    poster: String,
    movieTitle: String,
    reviewTitle: String,
    review: String,
    recommendationId: String,
  }
  // userId: {
  //   type: String,
  // },

  // movieId: {
  //   type: String,
  // },

  // poster: {
  //   type: String,
  // },
  
  // movieTitle: {
  //   type:String,
  // },
})
const Review = mongoose.model('Reviews', reviews);

module.exports = Review;