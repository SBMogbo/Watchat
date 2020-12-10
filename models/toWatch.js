const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toWatch = new Schema({
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
})
const ToWatch = mongoose.model('ToWatch', toWatch);

module.exports = ToWatch;