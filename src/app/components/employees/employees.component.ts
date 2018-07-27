import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../../mock/employees-mock';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
  }

}
