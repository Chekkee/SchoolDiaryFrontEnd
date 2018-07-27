import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../../services/grade.service';
import { Grade } from '../../../models/grade';
import { Location } from '../../../../../node_modules/@angular/common';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.css']
})
export class GradeEditComponent implements OnInit {

  grade: Grade = new Grade();

  constructor(
    private route: ActivatedRoute,
    private gradeService: GradeService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getGrade();
  }

  getGrade() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gradeService.getGrade(id)
      .subscribe(grade => this.grade = grade);
  }

  editGrade() {
    alert('Grade updated!');
    this.gradeService.editGrade(this.grade)
      .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }

}
