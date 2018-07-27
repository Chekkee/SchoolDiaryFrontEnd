import { Component, OnInit } from '@angular/core';
import { Grade } from '../../../models/grade';
import { GradeService } from '../../../services/grade.service';
import { Location } from '../../../../../node_modules/@angular/common';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.css']
})
export class GradeAddComponent implements OnInit {

  grade: Grade = new Grade();

  constructor(
    private gradeService: GradeService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  addGrade() {
    const studentId = this.route.snapshot.paramMap.get('studentId');
    const subjectId = +this.route.snapshot.paramMap.get('subjectId');
    this.gradeService.addGrade(studentId, subjectId, this.grade)
      .subscribe(() => this.location.back());

  }

  // addGradeAsTeacher() {
  //   const studentId = this.route.snapshot.paramMap.get('studentId');
  //   const subjectId = +this.route.snapshot.paramMap.get('subjectId');
  //   this.gradeService.addGrade( studentId, subjectId, this.grade)
  //     .subscribe(() => this.location.back());
  // }

  goBack() {
    this.location.back();
  }
}
