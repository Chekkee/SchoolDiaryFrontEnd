import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../../node_modules/@angular/common';
import { SubjectService } from '../../../services/subject.service';
import { Subject } from '../../../models/subject';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  subject: Subject = new Subject();

  constructor(
    private location: Location,
    private subjectService: SubjectService,
  ) { }

  ngOnInit() {
  }

  addSubject(subjectName: string, subjectFond: number, year: number) {
    this.subject.subjectName = subjectName;
    this.subject.subjectFond = subjectFond;
    this.subject.year = year;

    this.subjectService.addSubject(this.subject)
    .subscribe(() => this.location.back());

  }

  goBack() {
    this.location.back();
  }

}
