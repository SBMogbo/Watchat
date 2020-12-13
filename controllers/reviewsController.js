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
      .find({'user.id': req.params.id})
      .then(dbReviews => res.json(dbReviews))
      .catch(err => res.status(500).json(err));
  },
  findByMovieId: function (req, res) {
    db
      .find({'reviewedMovieId': req.params.id})
      .then(dbReviews => res.json(dbReviews))
      .catch(err => res.status(500).json(err));
  },
  create: function (req, res) {
    // console.log(req.body)
    db
      .create({
        user: req.body.user,
        reviewedMovieId: req.body.reviewedMovieId,
        reviewedMovieTitle: req.body.reviewedMovieTitle,
        reviewedMoviePoster: req.body.reviewedMoviePoster,
        reviewTitle: req.body.reviewTitle,
        review: req.body.review,
        recommendedMovieId: req.body.recommendedMovieId,
        recommendedMovieTitle: req.body.recommendedMovieTitle,
        recommendedMoviePoster: req.body.recommendedMoviePoster,
      })
      .then(dbReviews => res.json(dbReviews))
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
  },
};
