import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Location } from '../../../../../node_modules/@angular/common';
import { SubjectService } from '../../../services/subject.service';
import { Subject } from '../../../models/subject';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  subject: Subject = new Subject();

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSubject();
  }

  getSubject() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id)
      .subscribe(subject => this.subject = subject);
  }

  editSubject() {
    this.subjectService.editSubject(this.subject)
      .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }
}
