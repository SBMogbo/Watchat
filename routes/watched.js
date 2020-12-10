const watchedController = require('../controllers/watchedController');
const router = require("express").Router();
const passport = require("../config/passport");

router.route("/")
  .get(watchedController.findAll)
  .post(watchedController.create);

router.route("/:id")
  .get(watchedController.findById)
  

module.exports = router;
