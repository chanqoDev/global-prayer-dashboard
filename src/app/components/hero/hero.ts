import { Component, AfterViewInit } from '@angular/core';
import fullpage from 'fullpage.js';
import { Card } from '../card/card';
import { Section } from '../section/section';
// import { DashboardComponent } from '../../features/dashboard/dashboard'; 
import { PrayerCards } from '../../features/prayer-cards/prayer-cards';
@Component({
  selector: 'app-hero',
  imports: [Card, Section, PrayerCards],
  templateUrl: './hero.html',
  styles: ``
})
export class Hero implements AfterViewInit {
  ngAfterViewInit() {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      anchors: ['home', 'about', 'register'],
      scrollingSpeed: 800,
    });
  }
}
