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
    fetch("http://localhost:4000/api/prayers") // backend endpoint
    .then(res => res.json())
    .then(json => {
      const prayers = json.data; 
    
     new Grid({
          columns: ['Name', 'Prayer Request', 'Date', 'Urgency'],
          data: prayers.map((p: any) => [
            p.name,
            p.request,
            new Date(p.createdAt).toLocaleString(), // readable date
            p.urgency
          ]),
          search: true,
          sort: true,
          fixedHeader: true,
          height: '400px',
          pagination: { limit: 4 },
        }).render(this.el.nativeElement.querySelector('#prayerGrid'));
      })
      .catch(err => console.error('❌ Error loading prayers:', err));
  }
}
