import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  title = 'Elementary school "Ceda Ribic", Ruma';
  constructor(
    private userService: UserService,
    private router: Router) {

  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
