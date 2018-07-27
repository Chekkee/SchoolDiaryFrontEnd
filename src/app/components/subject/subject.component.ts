import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from '../../services/subject.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Location } from '../../../../node_modules/@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  user: User;
  subject: Subject;

  constructor(
    private subjectService: SubjectService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getSubject();
    this.user = this.userService.user;
  }

  getSubject() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id)
      .subscribe(subject => this.subject = subject);
  }

  goBack() {
    this.location.back();
  }

}
