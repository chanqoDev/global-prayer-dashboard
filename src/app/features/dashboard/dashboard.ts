import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Grid } from 'gridjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: '../../features/dashboard/dashboard.html',
})
export class DashboardComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    new Grid({
      columns: ['Name', 'Prayer Request', 'Date', 'Urgency'],
      data: [
        ['Alice', 'Please pray for my exams', '2025-08-18', 'High'],
        ['Bob', 'Health recovery', '2025-08-17', 'Medium'],
        ['Charlie', 'Job interview success', '2025-08-16', 'Low'],
        ['Dave', 'Family issues', '2025-08-15', 'High'],
        ['Eve', 'Travel safety', '2025-08-14', 'Medium'],
        ['Frank', 'Financial stability', '2025-08-13', 'Low']
      ],
      search: true,
      sort: true,
      fixedHeader: true,
      height: '400px',
      pagination:  {
      limit: 4
    },
    }).render(this.el.nativeElement.querySelector('#prayerGrid'));
  }
}
