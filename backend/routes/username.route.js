const express = require("express");
const router = express.Router();

const {
  getUsername,
  postUsername,
} = require("../controllers/username.controller.js");

router.get("/:id", getUsername);
router.post("/", postUsername);

module.exports = router;
