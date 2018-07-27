import { Grade } from './grade';

export class Teacher {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    subjectFond: number;
    mobilePhone: string;
    subjectsWithStudents: SubjectDisplayForTeacher[];
    remainingSubjects: SubjectDisplayForTeacher[];
}

export class RegisterTeacher {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    repeatedPassword: string;
    email: string;
    mobilePhone: string;
}

export class SubjectDisplayForTeacher {
    subjectId: number;
    subjectName: string;
    subjectFond: number;
    studentsWithGrades: StudentWIthOneSubjectAndGrades[];
}

class StudentWIthOneSubjectAndGrades {
    studentId: string;
    studentFirstName: string;
    studentLastName: string;
    studentYear: number;
    grades: Grade[];
}
