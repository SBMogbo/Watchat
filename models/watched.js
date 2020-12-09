const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const watchedA = new Schema({
  watchedA: {
      type: Array,
      movies: [
        {
          id: String,
          poster: String,
        },
      ]
  }
})
const WatchedB = mongoose.model('WatchedA', watchedB);

module.exports = WatchedB;