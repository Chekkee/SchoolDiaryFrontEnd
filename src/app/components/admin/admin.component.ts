import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';
import { ParentService } from '../../services/parent.service';
import { SubjectService } from '../../services/subject.service';
import { Parent } from '../../models/parent';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  studentOption = 0;
  teacherOption = 0;
  parentOption = 0;
  subjectOption = 0;
  showAllStudents = 0;
  showAllTeachers = 0;
  showAllParents = 0;
  showAllSubjects = 0;

  user: User;
  admin: Admin;
  students: Student[];
  teachers: Teacher[];
  parents: Parent[];
  subjects: Subject[];
  logs: string[] = [];

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private parentService: ParentService,
    private subjectService: SubjectService,
    private userService: UserService) { }

  ngOnInit() {
    this.getAdmin();
    this.user = this.userService.user;
  }

  getAdmin(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getAdmin(id)
      .subscribe(admin => this.admin = admin);
  }


  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
    this.showAllStudents++;
  }

  deleteStudent(student) {
    if (confirm('Are you sure that you want to delete selected student?')) {
      this.students = this.students.filter(s => s !== student);
      this.studentService.deleteStudent(student)
        .subscribe();
    }
  }

  addToStudentOption() {
    this.studentOption++;
  }


  getTeachers(): void {
    this.teacherService.getTeachers()
      .subscribe(teachers => this.teachers = teachers);
    this.showAllTeachers++;
  }

  deleteTeacher(teacher) {
    if (confirm('Are you sure that you want to delete selected teacher?')) {
      this.teachers = this.teachers.filter(t => t !== teacher);
      this.teacherService.deleteTeacher(teacher)
        .subscribe();
    }
  }

  addToTeacherOption() {
    this.teacherOption++;
  }

  getParents() {
    this.parentService.getParents()
      .subscribe(parents => this.parents = parents);
    this.showAllParents++;
  }

  getLogs() {
    this.adminService.getLogs()
      .subscribe(logs => this.logs = logs);
  }

  closeLogs() {
    this.logs = [];
  }

  deleteParent(parent) {
    if (confirm('Are you sure that you want to delete selected parent?')) {
      this.parents = this.parents.filter(p => p !== parent);
      this.parentService.deleteParent(parent)
        .subscribe();
    }
  }

  addToParentOption() {
    this.parentOption++;
  }


  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects);
    this.showAllSubjects++;
  }

  deleteSubject(subject) {
    if (confirm('Are you sure that you want to delete selected subject?')) {
      this.subjects = this.subjects.filter(s => s !== subject);
      this.subjectService.deleteSubject(subject)
        .subscribe();
    }
  }

  addToSubjectOption() {
    this.subjectOption++;
  }
}
