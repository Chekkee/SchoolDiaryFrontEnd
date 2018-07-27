import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent, RegisterParent } from '../models/parent';
import { UserService } from './user.service';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private parentUrl = 'http://localhost:33344/school/parents/';
  private registerParent = 'http://localhost:33344/school/registrations/parents';
  private studentUrl = 'http://localhost:33344/school/students/';

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  getParent(id: string): Observable<Parent> {
    const url = `${this.parentUrl}${id}`;
    return this.http.get<Parent>(url, this.userService.getOptionsWithToken());
  }

  getParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>(this.parentUrl, this.userService.getOptionsWithToken());
  }

  getRemainingStudents(id: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.parentUrl}${id}${'/remainingStudents'}`, this.userService.getOptionsWithToken());
  }

  addParent(parent: RegisterParent): Observable<RegisterParent> {
    return this.http.post<RegisterParent>(this.registerParent, parent, this.userService.getOptionsWithToken());
  }

  addStudentToParent(studentId, parentId): Observable<Parent> {
    return this.http.put<Parent>(`${this.studentUrl}${studentId}${'/parent/'}${parentId}`, {}, this.userService.getOptionsWithToken());
  }

  editParent(parent: Parent): Observable<Parent> {
    const url = `${this.parentUrl}${parent.id}`;
    alert('Parent is updated');
    return this.http.put<Parent>(url, parent, this.userService.getOptionsWithToken());
  }

  deleteParent(parent: Parent) {
    const url = `${this.parentUrl}${parent.id}`;
    return this.http.delete<Parent>(url, this.userService.getOptionsWithToken());
  }

  removeStudentFromParent(id: string, studentId: string): Observable<Parent> {
    const url = `${this.studentUrl}${studentId}${'/removeparent/'}${id}`;
    return this.http.delete<Parent>(url, this.userService.getOptionsWithToken());
  }
}
