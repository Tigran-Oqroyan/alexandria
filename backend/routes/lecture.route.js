const express = require("express");
const router = express.Router();

const {
  getLectures,
  getLectureById,
  postLecture,
  updateLecture,
  deleteLecture,
} = require("../controllers/lecture.controller.js");

router.get("/", getLectures);
router.post("/", postLecture);
router.get("/:id", getLectureById);
router.put("/:id", updateLecture);
router.delete("/:id", deleteLecture);

module.exports = router;
