const express = require("express");

const router = express.Router();
const homeController = require("../controllers/homeController");
const CreatePostController = require("../controllers/CreatePostController.js");
router.get("/", homeController.home);
router.get("/createPost", CreatePostController.create);
console.log("Router Loaded");

module.exports = router;
