import { Component, OnInit } from '@angular/core';
import { AllNews } from '../../mock/news-mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  AllNews = AllNews;

  constructor() { }

  ngOnInit() {
  }

}
