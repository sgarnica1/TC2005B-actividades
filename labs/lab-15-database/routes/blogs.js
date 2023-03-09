const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogs");

// BLOG ROUTES
router.get("/", controller.blog_index);
router.post("/", controller.blog_create_post);
router.get("/create", controller.blog_create_get);
router.get("/:id", controller.blog_details);

module.exports = router;
