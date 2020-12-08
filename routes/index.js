<<<<<<< HEAD:my-app/routes/index.js
const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");

// Initiate Mongo Server
InitiateMongoServer();
=======
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/account");

// API Routes
router.use("/api/user", apiRoutes);
>>>>>>> main:routes/index.js

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API is Working" });
});

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

