import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private gradeUrl = 'http://localhost:33344/school/grades/';
  private addGradeAdmin = 'http://localhost:33344/school/admins/student/';

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) { }

  getGrade(gradeId: number): Observable<Grade> {
    return this.http.get<Grade>(`${this.gradeUrl}${gradeId}`, this.userService.getOptionsWithToken());
  }

  addGrade(studentId: string, subjectId: number, grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(`${this.addGradeAdmin}${studentId}${'/subject/'}${subjectId}${'/givegrade'}`, grade,
      this.userService.getOptionsWithToken());
  }

  editGrade(grade: Grade): Observable<Grade> {
    return this.http.put<Grade>(`${this.gradeUrl}${grade.id}`, grade, this.userService.getOptionsWithToken());
  }

  deleteGrade(gradeId: number): Observable<Grade> {
    const url = `${this.gradeUrl}${gradeId}`;
    return this.http.delete<Grade>(url, this.userService.getOptionsWithToken());
  }
}
