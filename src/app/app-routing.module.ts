import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../app/components/employees/employees.component';
import { WebJournalComponent } from '../app/components/web-journal/web-journal.component';
import { StudentComponent } from './components/student/student.component';
import { ParentComponent } from './components/parent/parent.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherAddComponent } from './components/teacher/teacher-add/teacher-add.component';
import { ParentAddComponent } from './components/parent/parent-add/parent-add.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { ParentEditComponent } from './components/parent/parent-edit/parent-edit.component';
import { TeacherEditComponent } from './components/teacher/teacher-edit/teacher-edit.component';
import { SubjectComponent } from './components/subject/subject.component';
import { SubjectEditComponent } from './components/subject/subject-edit/subject-edit.component';
import { SubjectAddComponent } from './components/subject/subject-add/subject-add.component';
import { GradeEditComponent } from './components/grade/grade-edit/grade-edit.component';
import { GradeAddComponent } from './components/grade/grade-add/grade-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'webJournal', component: WebJournalComponent },
  { path: 'admins/:id', component: AdminComponent },

  { path: 'students/:id', component: StudentComponent },
  { path: 'student-add/add', component: StudentAddComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },

  { path: 'parents/:id', component: ParentComponent },
  { path: 'parent-add/add', component: ParentAddComponent },
  { path: 'parent-edit/:id', component: ParentEditComponent },

  { path: 'teachers/:id', component: TeacherComponent },
  { path: 'teacher-add/add', component: TeacherAddComponent },
  { path: 'teacher-edit/:id', component: TeacherEditComponent },

  { path: 'subject/:id', component: SubjectComponent },
  { path: 'subject-add/add', component: SubjectAddComponent },
  { path: 'subject-edit/:id', component: SubjectEditComponent },

  { path: 'students/:studentId/subject/:subjectId/grade-add/add', component: GradeAddComponent },
  { path: 'grade-edit/:id', component: GradeEditComponent },
  { path: 'teachers/:id/subject/:subjectId/student/:studentId', component: GradeAddComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }


