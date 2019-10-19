import express from "express";

import { getStudent, addStudent } from "../controllers/student.controller";
const router = express.Router();

import { inputValidation } from "../validations/student-request.service";

router.route("/").get(getStudent);
router.route("/").post(inputValidation, addStudent);

module.exports = router;
