const router = require("express").Router();
const user = require("./user");
const authRoutes = require("./auth");
const reviews = require("./reviews");
const toWatch = require("./toWatch");
const watched = require("./watched");

// Post routes
router.use("/api/user", user);
router.use("/api/auth", authRoutes);
router.use("/api/reviews", reviews);
router.use("/api/toWatch", toWatch);
router.use("/api/watched", watched);

module.exports = router;
