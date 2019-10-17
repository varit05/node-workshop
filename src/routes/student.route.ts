import express from "express";

import {
  getStudent,
  addStudent,
  addDummyStudent
} from "../controllers/student.controller";
const router = express.Router();

import { inputValidation } from "../validations/student-request.service";

// router.post("/dummy").get(addDummyStudent);

router.route("/").get(getStudent);
router.route("/").post(inputValidation, addStudent);

module.exports = router;
