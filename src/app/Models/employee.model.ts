import { IEmployee } from "../Shared/iemployee.model";

export class Employee implements IEmployee{
  employeeId: number;
  firstName: string;
  lastName: string;
  passportNumber: string;
  email: string;
  title: string;
  department: string;

  constructor(employeeId: number, firstName: string, lastName: string, passportNumber: string,
                email: string,
     title: string, department: string) {
    this.employeeId = employeeId;
    this.firstName =firstName;
    this.lastName = lastName;
    this.passportNumber = passportNumber
    this.email = email
    this.title =title
    this.department= department
  }
}
