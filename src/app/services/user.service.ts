import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  private loginUrl = 'http://localhost:33344/token';

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<User> {
    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<User>(this.loginUrl, body.toString(), httpOptions)
      .pipe(
        tap(user => this.user = user)
      );

  }

  logout() {
    this.user = null;
  }

  getOptionsWithToken() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.user.access_token}`
      })
    };
  }

}
