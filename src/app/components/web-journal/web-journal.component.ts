import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-web-journal',
  templateUrl: './web-journal.component.html',
  styleUrls: ['./web-journal.component.css']
})
export class WebJournalComponent implements OnInit {

  user: User;
  students: Student[];

  constructor(
    private userService: UserService,
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  login(username, password) {
    this.userService.login(username, password)
      .subscribe(user => {
        this.user = user;
        this.router.navigate([this.user.role, this.user.id]);
      });
  }

  logout() {
    this.userService.logout();
    this.user = this.userService.user;
    this.router.navigate(['']);
  }

  redirectStudent(): void {
    this.router.navigate(['students', this.user.id]);
  }

  redirectParent(): void {
    this.router.navigate(['parents', this.user.id]);
  }

  redirectAdmin(): void {
    this.router.navigate(['admins', this.user.id]);
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }
}
