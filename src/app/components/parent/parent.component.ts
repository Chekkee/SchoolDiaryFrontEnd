import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../services/parent.service';
import { Parent } from '../../models/parent';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { Location } from '../../../../node_modules/@angular/common';
import { UserService } from '../../services/user.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user: User;
  parent: Parent;
  remainingStudents: Student[] = [];

  constructor(
    private userService: UserService,
    private parentService: ParentService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.getParent();
  }

  getParent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.parentService.getParent(id)
      .subscribe(parent => this.parent = parent);
  }

  showRemainingStudents() {
    this.parentService.getRemainingStudents(this.parent.id)
      .subscribe(students => this.remainingStudents = students);
  }

  hideRemainingStudents() {
    this.remainingStudents = [];
  }

  addStudentToParent(student: Student) {
    const studentId = student.id;
    const parentId = this.parent.id;
    this.parent.studentsWithSubjectsAndGrades.push(student);
    this.remainingStudents = this.remainingStudents.filter(s => s !== student);
    this.parentService.addStudentToParent(studentId, parentId)
      .subscribe();
  }

  removeStudentFromParent(student) {
    this.parent.studentsWithSubjectsAndGrades = this.parent.studentsWithSubjectsAndGrades.filter(s => s !== student);
    this.parentService.removeStudentFromParent(this.parent.id, student.id)
      .subscribe();
  }


  goBack(): void {
    this.location.back();
  }

}
