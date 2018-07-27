import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, RegisterStudent, SubjectWithGrades } from '../models/student';
import { UserService } from './user.service';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:33344/school/students/';
  private registerStudentUrl = 'http://localhost:33344/school/registrations/students';
  private putTeacherToSubjectUrl = 'http://localhost:33344/school/teachers/';

  constructor(private http: HttpClient,
    private userService: UserService) { }

  getStudent(id: string): Observable<Student> {
    const url = `${this.studentUrl}${id}`;
    return this.http.get<Student>(url, this.userService.getOptionsWithToken());
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl, this.userService.getOptionsWithToken());
  }

  getRemainingSubjects(id): Observable<SubjectWithGrades[]> {
    return this.http.get<SubjectWithGrades[]>(`${this.studentUrl}${id}${'/remainingsubjects'}`, this.userService.getOptionsWithToken());
  }

  addStudent(student: RegisterStudent): Observable<RegisterStudent> {
    return this.http.post<RegisterStudent>(this.registerStudentUrl, student, this.userService.getOptionsWithToken());
  }

  addSubjectToStudent(studentId: string, subjectId: number): Observable<SubjectWithGrades> {
    return this.http.put<SubjectWithGrades>(`${this.studentUrl}${studentId}${'/subject/'}${subjectId}`, {},
      this.userService.getOptionsWithToken());
  }

  putTeacherToSubject(teacherId: string, studentId: string, subjectId: number): Observable<Teacher> {
    const url = `${this.putTeacherToSubjectUrl}${teacherId}${'/putStudent/'}${studentId}${'/subject/'}${subjectId}`;
    return this.http.put<Teacher>(url, {}, this.userService.getOptionsWithToken());
  }

  editStudent(student: Student): Observable<Student> {
    const url = `${this.studentUrl}${student.id}`;
    alert('student is updated');
    return this.http.put<Student>(url, student, this.userService.getOptionsWithToken());
  }

  deleteStudent(student: Student) {
    const id = student.id;
    const url = `${this.studentUrl}${id}`;
    return this.http.delete<Student>(url, this.userService.getOptionsWithToken());
  }

  deleteSubjectFromStudent(studentId: string, subjectId: number): Observable<Student> {
    const url = `${this.studentUrl}${studentId}${'/removesubject/'}${subjectId}`;
    return this.http.delete<Student>(url, this.userService.getOptionsWithToken());
  }
}
