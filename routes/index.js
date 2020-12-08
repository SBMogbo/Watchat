const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/account");

// API Routes
router.use("/api/user", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
