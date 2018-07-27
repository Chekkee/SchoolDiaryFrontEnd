import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher, RegisterTeacher, SubjectDisplayForTeacher } from '../models/teacher';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teacherUrl = 'http://localhost:33344/school/teachers/';
  private registerTeacherUrl = 'http://localhost:33344/school/registrations/teachers';

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherUrl);
  }

  getTeacher(id: string): Observable<Teacher> {
    const url = `${this.teacherUrl}${id}`;
    return this.http.get<Teacher>(url, this.userService.getOptionsWithToken());
  }

  getRemainingSubjects(id: string): Observable<SubjectDisplayForTeacher[]> {
    return this.http.get<SubjectDisplayForTeacher[]>(`${this.teacherUrl}${id}${'/remainingsubjects'}`,
      this.userService.getOptionsWithToken());
  }

  addTeacher(teacher: RegisterTeacher): Observable<RegisterTeacher> {
    return this.http.post<RegisterTeacher>(this.registerTeacherUrl, teacher, this.userService.getOptionsWithToken());
  }

  addSubjectToTeacher(teacherId, subjectId): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.teacherUrl}${teacherId}${'/subject/'}${subjectId}`, {}, this.userService.getOptionsWithToken());
  }

  editTeacher(teacher: Teacher): Observable<Teacher> {
    alert('teacher updated');
    const url = `${this.teacherUrl}${teacher.id}`;
    return this.http.put<Teacher>(url, teacher, this.userService.getOptionsWithToken());
  }

  removeSubjectFromTeacher(teacherId, subjectId): Observable<Teacher> {
    return this.http.delete<Teacher>(`${this.teacherUrl}${teacherId}${'/removesubject/'}${subjectId}`,
      this.userService.getOptionsWithToken());
  }

  deleteTeacher(teacher: Teacher): Observable<Teacher> {
    const url = `${this.teacherUrl}${teacher.id}`;
    return this.http.delete<Teacher>(url, this.userService.getOptionsWithToken());
  }
}
