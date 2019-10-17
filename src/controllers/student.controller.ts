import { Request, Response, NextFunction } from "express";

import { Student } from "../models/student.model";
import StudentService from "../services/student.service";
import { resolveTxt } from "dns";

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentData: Student[] = await StudentService.getStudent();
    res.json({
      message: "All students data retrieve successfully",
      data: studentData
    });
  } catch (error) {
    next(error);
  }
};

const addStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Post request body", req.body);
    res.send({
      message: "Student Added"
    });
  } catch (error) {
    next(error);
  }
};

export { getStudent, addStudent };
