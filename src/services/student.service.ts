import { connect } from "../database";
import { Student } from "../models/student.model";

class StudentService {
  public async getStudent() {
    try {
      const db = await connect();
      const students = await db
        .collection(process.env.DB_COLLECTION)
        .find({})
        .toArray();
      return students;
    } catch (error) {
      console.log("error retrieving students");
    }
  }

  public async addStudent(student: Student) {
    try {
      const db = await connect();
      const result = await db
        .collection(process.env.DB_COLLECTION)
        .insert(student);
      const newStudent = result.ops[0];
      console.log("New Student", newStudent);
      return newStudent;
    } catch (error) {
      console.log("error while adding student");
    }
  }
}

export default new StudentService();
