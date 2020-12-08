const userController=require('../controllers/userController');
const router = require("express").Router();
const passport = require("../config/passport");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/:id")
  .get(userController.findById)
  .put(userController.update)

router.route("/login")
  .post((req, res, next) => {
    const authFunction=passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return res.sendStatus(401);
      } else {
        req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }
    
          return res.json({
            name:user.name,
            token:user._id
          })
        });
      }  
    });
    authFunction(req, res, next);
  }).get((req,res)=>{
    // console.log(req.user,req.working)
    if(!req.user) {
      return res.sendStatus(401);
    } else {
      return res.json({
            name:req.user.name,
            token:req.user._id
          })
    }
  })
module.exports = router;
