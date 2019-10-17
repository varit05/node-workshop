import { string, object } from "joi";

const studentReq = {
  body: object({
    firstName: string().required(),
    lastName: string().required()
  })
};

export { studentReq };
