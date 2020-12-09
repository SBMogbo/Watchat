const router = require("express").Router();
const user = require("./user");
const authRoutes = require("./auth");

// Post routes
router.use("/api/user", user);
router.use("/api/auth", authRoutes);

module.exports = router;
