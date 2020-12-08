const userController = require('../controllers/userController');
const router = require("express").Router();
const passport = require("../config/passport");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/:id")
  .get(userController.findById)
  .put(userController.update)

module.exports = router;
