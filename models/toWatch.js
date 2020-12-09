const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toWatchA = new Schema({
  toWatchA: {
    type: Array,
    movies: [
      {
        id: String,
        poster: String,
      },
    ]
  }
})
const ToWatchB = mongoose.model('ToWatchA', toWatchB);

module.exports = ToWatchB;