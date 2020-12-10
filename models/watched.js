const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watched = new Schema({
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
const Watched = mongoose.model('Watched', watched);

module.exports = Watched;