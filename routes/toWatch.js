const toWatchController = require('../controllers/toWatchController');
const router = require("express").Router();
const passport = require("../config/passport");

router.route("/")
  .get(toWatchController.findAll)
  .post(toWatchController.create);

router.route("/:id")
  .get(toWatchController.findByUserId)
 

module.exports = router;
