import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Location } from '@angular/common';
import { SubjectService } from '../../services/subject.service';
import { GradeService } from '../../services/grade.service';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  user: User;
  student: Student = new Student();
  possibleTeachers: Teacher[] = [];

  constructor(
    private usersService: UserService,
    private studentService: StudentService,
    private subjectService: SubjectService,
    private gradeService: GradeService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.user = this.usersService.user;
    this.getStudent();
  }

  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  getRemainingSubjects(studentId) {
    this.studentService.getRemainingSubjects(studentId)
      .subscribe(remainingSubjects => this.student.remainingSubjects = remainingSubjects);
  }

  addSubjectToStudent(subject) {
    this.student.remainingSubjects = this.student.remainingSubjects.filter(s => s !== subject);
    this.student.subjectsWithGrades.push(subject);
    this.studentService.addSubjectToStudent(this.student.id, subject.subjectId)
      .subscribe();
  }

  getPossibleTeachers(subject) {
    const subjectId = subject.subjectId;
    this.subjectService.getPossibleTeachers(subjectId)
      .subscribe(teachers => this.possibleTeachers = teachers);
  }

  putTeacherToSubject(subject, teacher) {
    const teacherId = teacher.id;
    const subjectId = subject.subjectId;
    alert(`From now on, teacher ${teacher.firstName} ${teacher.lastName} will teach this student on subject ${subject.subjectName}`);
    this.possibleTeachers = [];
    this.studentService.putTeacherToSubject(teacherId, this.student.id, subjectId)
      .subscribe();
  }

  clearRemainingSubjects() {
    this.student.remainingSubjects = [];
  }

  deleteSubjectFromStudent(subject) {
    const studentId = this.student.id;
    const subjectId = subject.subjectId;
    this.student.subjectsWithGrades = this.student.subjectsWithGrades.filter(s => s !== subject);
    this.studentService.deleteSubjectFromStudent(studentId, subjectId)
      .subscribe();
  }

  deleteGradeFromStudent(subject, grade) {
    const gradeId = grade.id;
    if (confirm('Are you sure that you want to remove this grade?')) {
      this.student.subjectsWithGrades.find(s => subject).grades =
        this.student.subjectsWithGrades.find(s => subject).grades.filter(g => g !== grade);
      this.gradeService.deleteGrade(gradeId)
        .subscribe();
    }
  }

  clearPossibleTeachers() {
    this.possibleTeachers = [];
  }

  goBack() {
    this.location.back();
  }

}
