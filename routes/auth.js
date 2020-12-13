const router = require("express").Router();
const passport = require("../config/passport");

router
  .route("/login").post((req, res, next) => {
    const authFunction = passport.authenticate('local',
      (err, user, info) => {
        if (err) {
          console.log(err)
          return res.sendStatus(401);
        } else {
          req.logIn(user, function (err) {
            if (err) {
              return next(err);
            }
            // console.log(user)
            return res.json({
              username: user.username,
              token: user._id
            })
          });
        }
      });
    authFunction(req, res, next);
  }).get((req, res) => {
    // console.log(req.user,req.working)
    if (!req.user) {
      return res.sendStatus(401);
    } else {
      // console.log(req.user)
      return res.json({
        username: req.user.username,
        token: req.user._id
      })
    }
  })

module.exports = router;
