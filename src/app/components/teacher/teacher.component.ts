import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Location } from '../../../../node_modules/@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GradeService } from '../../services/grade.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  user: User;
  teacher: Teacher;

  constructor(
    private userService: UserService,
    private teacherService: TeacherService,
    private gradeService: GradeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.getTeacher();
  }

  getTeacher(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id)
      .subscribe(teacher => this.teacher = teacher);
  }

  getRemainingSubjects(id) {
    this.teacherService.getRemainingSubjects(id)
      .subscribe(subjects => this.teacher.remainingSubjects = subjects);
  }

  goBack(): void {
    this.location.back();
  }

  showStudents(id: number) {
    alert(id);
  }

  addSubject(teacherId, subject) {
    const subjectId = subject.subjectId;
    this.teacher.remainingSubjects = this.teacher.remainingSubjects.filter(s => s !== subject);
    this.teacher.subjectsWithStudents.push(subject);
    this.teacherService.addSubjectToTeacher(teacherId, subjectId)
      .subscribe();
  }

  removeSubject(teacherId, subject) {
    const subjectId = subject.subjectId;
    if (confirm('Do you really want to remove this subject from teacher?')) {
      this.teacher.subjectsWithStudents = this.teacher.subjectsWithStudents.filter(s => s !== subject);
      this.teacherService.removeSubjectFromTeacher(teacherId, subjectId)
        .subscribe();
    }
  }

  clearRemainingSubjects() {
    this.teacher.remainingSubjects = [];
  }

  deleteGrade(grade) {
    const gradeId = grade.id;
    if (confirm('Are you sure that you want to remove this grade?')) {
      this.gradeService.deleteGrade(gradeId)
        .subscribe();
    }
  }
}
