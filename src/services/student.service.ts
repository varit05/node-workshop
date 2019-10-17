class StudentService {
  public getStudent() {
    return [
      {
        firstName: "Santosh",
        lastName: "Yadav",
        age: 33,
        email: "abc@yadav.com",
        city: "Pune",
        birthDate: "18/09/1986",
        feesPaid: true
      }
    ];
  }
}

export default new StudentService();
