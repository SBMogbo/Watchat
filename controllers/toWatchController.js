const db = require("../models/toWatch");

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db
      .find(req.query)
      .then(dbToWatch => res.json(dbToWatch))
      .catch(err => res.status(500).json(err));
  },
  findById: function (req, res) {
    db
      .findById(req.params.id)
      .then(dbToWatch => res.json(dbToWatch))
      .catch(err => res.status(500).json(err));
  },
  findByUserId: function (req, res) {
    console.log(req.params)
    console.log(JSON.stringify({'user.id': req.params.id}));
    db
      .find({'userId': req.params.id})
      .then(dbToWatch => {
        console.log(dbToWatch);
        res.json(dbToWatch);
      })
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
      .then(dbToWatch => res.json(dbToWatch))
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
  },
};
