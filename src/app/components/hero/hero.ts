import { Component, AfterViewInit } from '@angular/core';
import fullpage from 'fullpage.js';
import { Card } from '../card/card';
import { Section } from '../section/section';
// import { DashboardComponent } from '../../features/dashboard/dashboard'; 
import { PrayerCards } from '../../features/prayer-cards/prayer-cards';
  

@Component({
  selector: 'app-hero',
  standalone: true, 
  imports: [Card, Section, PrayerCards],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements AfterViewInit {
  ngAfterViewInit() {
    new fullpage('#fullpage', {
      licenseKey: 'gplv3-license',
      autoScrolling: false,
      navigation: true,
      anchors: ['home', 'about', 'register'],
      scrollingSpeed: 800,
    });
  }
}
