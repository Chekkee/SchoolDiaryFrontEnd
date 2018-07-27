import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../../services/student.service';
import { Location } from '../../../../../node_modules/@angular/common';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = new Student();

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent() {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  editStudent() {
    this.studentService.editStudent(this.student)
      .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }

}
