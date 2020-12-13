const reviewsController = require('../controllers/reviewsController');
const router = require("express").Router();
const passport = require("../config/passport");

router.route("/")
  .get(reviewsController.findAll)
  .post(reviewsController.create);

router.route("/user/:id")
  .get(reviewsController.findByUserId)

  router.route("/movie/:id")
  .get(reviewsController.findByMovieId)
  
module.exports = router;
