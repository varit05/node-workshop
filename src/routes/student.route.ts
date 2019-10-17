import express from "express";
import validate from "express-validation";

import { getStudent, addStudent } from "../controllers/student.controller";
const router = express.Router();

import { studentReq } from "../validations/student-request.validator";

router.route("/").get(getStudent);
router.route("/").post(validate(studentReq), addStudent);

module.exports = router;
