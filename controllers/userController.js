const db = require("../models/users");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db
      .find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(500).json(err));
  },
  findById: function (req, res) {
    db
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(500).json(err));
  },
  create: function (req, res) {
    console.log(req.body.password)
    db
      .create({
        userName: req.body.username,
        email: req.body.email.toLowerCase(),
        md5Password: md5(req.body.password),
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      });
  },
  update: function (req, res) {
    db
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(500).json(err));
  },
  login: function (req, res) {
    db
      .findOne({ email: req.body.email.toLowerCase() })
      .then(userAccount => {
        if (!userAccount || userAccount.password !== md5(req.body.password)) {
          res.sendStatus(401);
        } else {
          const sessionToken = jwt.sign({ _id: userAccount._id, signature: md5(userAccount.email) }, "jwtsecretpassphrase");
          res.json({
            name: userAccount.name,
            token: sessionToken
          });
        }
      })
      .catch(err => res.status(409).json(err));
  },
  authenticate: function (req, res) {
    if (!req.get("Authorization")) {
      res.sendStatus(401);
    } else {
      try {
        const jwtPayload = jwt.verify(req.get("Authorization"), "jwtsecretpassphrase");
        db.findOne({
          _id: jwtPayload._id
        }).then(userAccount => {
          if (!userAccount || md5(userAccount.email) != jwtPayload.signature) {
            res.sendStatus(401);
          } else {
            const sessionToken = jwt.sign({ _id: userAccount._id, signature: md5(userAccount.email) }, "jwtsecretpassphrase");
            res.json({
              name: userAccount.name,
              token: sessionToken
            });
          }
        }).catch(err => res.status(401).json(err));
      } catch (error) {
        res.sendStatus(401);
      }
    }
  },
};
