import { Request, Response, NextFunction } from "express";

import { Student } from "../models/student.model";
import StudentService from "../services/student.service";
import { OK } from "http-status-codes";

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
    res.status(OK).send({
      message: "Student Added"
    });
  } catch (error) {
    next(error);
  }
};

const addDummyStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = [
      {
        firstName: "Sachin",
        lastName: "Tendulkar",
        age: 17,
        birthDate: new Date("2002-02-20T08:30:00")
      },
      {
        firstName: "Virat",
        lastName: "Kohli",
        age: 11,
        birthDate: new Date("2008-03-17T17:32:00")
      },
      {
        firstName: "Ishant",
        lastName: "Sharma",
        age: 15,
        birthDate: new Date("2004-06-20T08:30:00")
      },
      {
        firstName: "M S",
        lastName: "Dhoni",
        age: 15,
        birthDate: new Date("2004-06-20T08:30:00")
      },
      {
        firstName: "Hardik",
        lastName: "Pandya",
        age: 12,
        birthDate: new Date("2007-10-16T17:32:00")
      }
    ];
    
    res.status(OK).send({ message: "Added successfully" });
  } catch (error) {
    next(error);
  }
};

export { getStudent, addStudent, addDummyStudent };
