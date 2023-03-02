const express = require("express");
const router = express.Router();
const controller = require("../controllers/about");

router.get("/", controller.index);

module.exports = router;
