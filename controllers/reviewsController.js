const db = require("../models/reviews");

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db
      .find(req.query)
      .then(dbReviews => res.json(dbReviews))
      .catch(err => res.status(500).json(err));
  },
  findById: function (req, res) {
    db
      .findById(req.params.id)
      .then(dbReviews => res.json(dbReviews))
      .catch(err => res.status(500).json(err));
  },
  findByUserId: function (req, res) {
    db
      .find({'userId': req.params.id})
      .then(dbReviews => res.json(dbReviews))
      .catch(err => res.status(500).json(err));
  },
  findByMovieId: function (req, res) {
    db
      .find({'movieId': req.params.id})
      .then(dbReviews => res.json(dbReviews))
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
      .then(dbReviews => res.json(dbReviews))
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
  },
};
