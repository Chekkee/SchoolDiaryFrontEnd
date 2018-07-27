import { Component, OnInit } from '@angular/core';
import { RegisterStudent } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student: RegisterStudent = new RegisterStudent();

  constructor(
    private studentService: StudentService,
    private location: Location) {
  }

  ngOnInit() {
  }

  addStudent(firstName: string, lastName: string, username: string, password: string, repeatedPassword: string, dateOfBirth: Date) {
    this.student.FirstName = firstName;
    this.student.LastName = lastName;
    this.student.UserName = username;
    this.student.Password = password;
    this.student.RepeatedPassword = repeatedPassword;
    this.student.DateOfBirth = dateOfBirth;

    this.studentService.addStudent(this.student)
      .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }

}
