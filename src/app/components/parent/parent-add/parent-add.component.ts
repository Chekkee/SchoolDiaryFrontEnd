import { Component, OnInit } from '@angular/core';
import { RegisterParent } from '../../../models/parent';
import { ParentService } from '../../../services/parent.service';
import { Location } from '../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.css']
})
export class ParentAddComponent implements OnInit {

  parent: RegisterParent = new RegisterParent();

  constructor(
    private parentService: ParentService,
    private location: Location) { }

  ngOnInit() {
  }

  addParent(firstName: string, lastName: string, userName: string, password: string,
    repeatedPassword: string, email: string, mobilePhone: string) {
    this.parent.firstName = firstName;
    this.parent.lastName = lastName;
    this.parent.userName = userName;
    this.parent.password = password;
    this.parent.repeatedPassword = repeatedPassword;
    this.parent.email = email;
    this.parent.mobilePhone = mobilePhone;

    this.parentService.addParent(this.parent)
      .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }

}
