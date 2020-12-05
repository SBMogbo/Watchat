const router = require("express").Router();
const api = require("./api");

// page routes
router.use("./api", api);

module.exports = router;