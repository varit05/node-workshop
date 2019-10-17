import express, { Router } from "express";

const router: Router = express.Router();

const studentRoutes = require("./student.route");

/**
 * route to check Application status
 */

router.get("/status", (req, res) => res.send("OK"));

router.use("/student", studentRoutes);

module.exports = router;
