import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { WebJournalComponent } from './components/web-journal/web-journal.component';
import { DashboardItemComponent } from './components/dashboard/dashboard-item/dashboard-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeesComponent,
    WebJournalComponent,
    DashboardItemComponent,
    StudentComponent,
    ParentComponent,
    AdminComponent,
    StudentAddComponent,
    TeacherComponent,
    TeacherAddComponent,
    ParentAddComponent,
    StudentEditComponent,
    ParentEditComponent,
    TeacherEditComponent,
    SubjectComponent,
    SubjectEditComponent,
    SubjectAddComponent,
    GradeEditComponent,
    GradeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
