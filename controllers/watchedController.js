const db = require("../models/watched");

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db
      .find(req.query)
      .then(dbWatched => res.json(dbWatched))
      .catch(err => res.status(500).json(err));
  },
  findById: function (req, res) {
    db
      .findById(req.params.id)
      .then(dbWatched => res.json(dbWatched))
      .catch(err => res.status(500).json(err));
  },
  create: function (req, res) {
    db
      .create({
        userId: req.body.userId,
        movieId: req.body.movieId,
        poster: req.body.poster,
        movieTitle: req.body.movieTitle,
      })
      .then(dbWatched => res.json(dbWatched))
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
  },
};
