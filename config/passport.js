const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const md5=require("md5");
const db = require("../models/users");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.findOne({userName: email}).then(function(dbUser) {
      console.log(dbUser)
      console.log(email)
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (md5(password)!==dbUser.md5Password) {
        console.log(password)
        console.log(md5(password))
        console.log(dbUser.password)
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  console.log("here")
  console.log(user)
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});
// Exporting our configured passport
module.exports = passport;
