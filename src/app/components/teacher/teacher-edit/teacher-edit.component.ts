import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/teacher';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { TeacherService } from '../../../services/teacher.service';
import { Location } from '../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  teacher: Teacher;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id)
      .subscribe(teacher => this.teacher = teacher);
  }

  editTeacher() {
    this.teacherService.editTeacher(this.teacher)
      .subscribe();
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
