import { Grade } from './grade';

export class Student {
    id: string;
    firstName: string;
    lastName: string;
    year: number;
    dateOfBirth: Date;
    parentsInfo: ParentNameAndLastName[];
    subjectsWithGrades: SubjectWithGrades[];
    remainingSubjects: SubjectWithGrades[];
}

export class RegisterStudent {
    id: string;
    FirstName: string;
    LastName: string;
    UserName: string;
    DateOfBirth: Date;
    Password: string;
    RepeatedPassword: string;
}

export class ParentNameAndLastName {
    id: string;
    parentFirstName: string;
    parentLastName: string;
}

export class SubjectWithGrades {
    id: string;
    subjectName: string;
    grades: Grade[];
}
