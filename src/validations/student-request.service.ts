import { NextFunction, Request, Response } from "express";
import { ValidateStudentRequest } from "./student-request.validator";
import { BAD_REQUEST } from "http-status-codes";

export class StudentValidator {
  public async validateStudentRequest(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await ValidateStudentRequest.validateStudentParams(req.body);
      next();
    } catch (e) {
      const errorMessage = e.details.map((d: any) => d.message);
      res.status(BAD_REQUEST).json({ validationErrors: errorMessage });
      return;
    }
  }
}

export const inputValidation = new StudentValidator().validateStudentRequest;
