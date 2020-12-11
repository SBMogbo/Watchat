const db = require("../models/reviews");

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
  create: function (req, res) {
    console.log(req.body)
    db
      .create({
        user: req.body.user,
        movieId: req.body.movieId,
        poster: req.body.poster,
        movieTitle: req.body.movieTitle,
        reviewTitle: req.body.reviewTitle,
        review: req.body.review,
        recommendationId: req.body.recommendationId,
      })
      .then(dbToWatch => res.json(dbToWatch))
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
  },
};
