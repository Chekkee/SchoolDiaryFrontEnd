import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { UserService } from './user.service';
import { Subject } from '../models/subject';
import { Teacher } from '../models/teacher';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = 'http://localhost:33344/school/subjects/';
  private registerSubjectUrl = 'http://localhost:33344/school/subjects/';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl, this.userService.getOptionsWithToken());
  }

  getSubject(id: number): Observable<Subject> {
    const url = `${this.subjectUrl}${id}`;
    return this.http.get<Subject>(url, this.userService.getOptionsWithToken());
  }

  getPossibleTeachers(subjectId: number): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.subjectUrl}${subjectId}${'/possibleteachers'}`, this.userService.getOptionsWithToken());
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.registerSubjectUrl, subject, this.userService.getOptionsWithToken());
  }

  editSubject(subject: Subject): Observable<Subject> {
    alert('Subject updated!');
    const url = `${this.subjectUrl}${subject.id}`;
    return this.http.put<Subject>(url, subject, this.userService.getOptionsWithToken());
  }

  deleteSubject(subject): Observable<Subject> {
    const id = subject.id;
    const url = `${this.subjectUrl}${id}`;
    return this.http.delete<Subject>(url, this.userService.getOptionsWithToken());
  }

}
