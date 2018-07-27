import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../../models/news';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
