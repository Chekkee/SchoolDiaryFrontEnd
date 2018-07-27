import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl = 'http://localhost:33344/school/admins/';

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  getAdmin(id: string): Observable<Admin> {
    const url = `${this.adminUrl}${id}`;
    return this.http.get<Admin>(url);
  }

  getLogs(): Observable<string[]> {
    return this.http.get<string[]>(`${this.adminUrl}${'getLogs'}`, this.userService.getOptionsWithToken());
  }
}
