const router = require("express").Router();
const user = require("./user");

// Post routes
router.use("/api/user", user);

module.exports = router;
