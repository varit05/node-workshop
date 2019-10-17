import {
  string,
  object,
  ObjectSchema,
  validate,
  ValidationResult,
  number,
  date,
  boolean
} from "joi";
import { Student } from "../models/student.model";

const cityList = ["Pune", "Mumbai"];

export class ValidateStudentRequest {
  public static studentReqSchema: ObjectSchema = object().keys({
    firstName: string().required(),
    lastName: string(),
    age: number()
      .required()
      .min(18)
      .max(80),
    email: string().email(),
    city: string().valid(cityList),
    birthDate: date(),
    feesPaid: boolean()
  });

  /**
   * @description
   * static function to validate Student params request
   */
  public static validateStudentParams(request: Student): ValidationResult<any> {
    return validate(request, this.studentReqSchema, {
      abortEarly: false
    });
  }
}
