const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");

router.get("/signup", controller.signupForm);
router.post("/signup", controller.signup);

router.get("/signin", controller.signinForm);

module.exports = router;
