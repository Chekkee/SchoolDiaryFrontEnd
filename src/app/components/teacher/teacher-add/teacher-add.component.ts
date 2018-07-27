import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { RegisterTeacher } from '../../../models/teacher';
import { Location } from '../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  teacher: RegisterTeacher = new RegisterTeacher();

  constructor(
    private teacherService: TeacherService,
    private location: Location) { }

  ngOnInit() {
  }

  addTeacher(firstName: string, lastName: string, userName: string,
    password: string, repeatedPassword: string, email: string, mobilePhone: string) {
    this.teacher.firstName = firstName;
    this.teacher.lastName = lastName;
    this.teacher.userName = userName;
    this.teacher.password = password;
    this.teacher.repeatedPassword = repeatedPassword;
    this.teacher.email = email;
    this.teacher.mobilePhone = mobilePhone;

    this.teacherService.addTeacher(this.teacher)
    .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }

}
