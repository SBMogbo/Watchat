const userController = require('../controllers/userController');
const router = require("express").Router();
const passport = require("../config/passport");

router.route("/")
  .get(userController.findAll)


router.route("/:id")
  .get(userController.findById)
  .put(userController.update)

module.exports = router;
