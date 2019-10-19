import { Request, Response, NextFunction } from "express";
import { OK } from "http-status-codes";

import { Student } from "../models/student.model";
import StudentService from "../services/student.service";

const getStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentData: Student[] = await StudentService.getStudent();
    res.status(OK).json({
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

    const newStudent = await StudentService.addStudent(req.body);

    res.status(OK).send({
      message: "Student Added",
      data: newStudent
    });
  } catch (error) {
    next(error);
  }
};

export { getStudent, addStudent };
