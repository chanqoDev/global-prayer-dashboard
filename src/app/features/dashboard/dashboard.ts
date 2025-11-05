import { Component, AfterViewInit, ElementRef, OnInit } from '@angular/core';
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
    fetch("https://global-prayer-dashboard.onrender.com/api/prayers") // backend endpoint :  http://localhost:4000/api/prayers
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

// export class DashboardComponent implements OnInit {

//   constructor(private el: ElementRef) {}

//   ngOnInit() {
//     this.loadPrayers();
//   }

//   loadPrayers() {
//     const container = this.el.nativeElement.querySelector('#prayerGrid');
//     container.innerHTML = ""; // Clear old table before re-rendering

//     fetch("https://global-prayer-dashboard.onrender.com/api/prayers")
//       .then(res => res.json())
//       .then(json => {
//         const prayers = json.data;

//         new Grid({
//           columns: ['Name', 'Prayer Request', 'Date', 'Urgency'],
//           data: prayers.map((p: { name: any; request: any; createdAt: string | number | Date; urgency: any; }) => [
//             p.name,
//             p.request,
//             new Date(p.createdAt).toLocaleString(),
//             p.urgency
//           ]),
//           search: true,
//           sort: true,
//           fixedHeader: true,
//           height: '400px',
//           pagination: { limit: 4 },
//         }).render(container);
//       })
//       .catch(err => console.error('❌ Error loading prayers:', err));
//   }
// }
