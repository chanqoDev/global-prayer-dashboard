import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-prayer-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './prayer-cards.html',
  styleUrl: './prayer-cards.css'
})
export class PrayerCards implements OnInit {
 prayers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPrayers();
  }
//http://localhost:4000/api/prayers
  loadPrayers() {
    this.http.get<{ data: any[] }>('https://global-prayer-dashboard.onrender.com/api/prayers')
      .subscribe({
        next: (res) => this.prayers = res.data,
        error: (err) => console.error('❌ Error loading prayers:', err)
      });
  }
  
}
