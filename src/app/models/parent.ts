import { Student } from './student';

export class Parent {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    mobilePhone: string;
    studentsWithSubjectsAndGrades: Student[];
    remainingStudents: Student[];
}

export class RegisterParent {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    repeatedPassword: string;
    email: string;
    mobilePhone: string;
}
