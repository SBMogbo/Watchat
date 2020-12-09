const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

/* Passport config */
const session = require("express-session");
const passport = require("./config/passport");
// app.use(function(req,res,next) {
//   req.working="This works!";
//   next();
// })
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/watchat', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
