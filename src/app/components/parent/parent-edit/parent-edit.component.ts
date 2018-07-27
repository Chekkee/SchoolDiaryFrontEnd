import { Component, OnInit } from '@angular/core';
import { Parent } from '../../../models/parent';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ParentService } from '../../../services/parent.service';
import { Location } from '../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.css']
})
export class ParentEditComponent implements OnInit {

  parent: Parent = new Parent();

  constructor(
    private route: ActivatedRoute,
    private parentService: ParentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getParent();
  }

  getParent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.parentService.getParent(id)
      .subscribe(parent => this.parent = parent);
  }

  editParent() {
    this.parentService.editParent(this.parent)
      .subscribe(() => this.location.back());
  }

  goBack() {
    this.location.back();
  }
}
