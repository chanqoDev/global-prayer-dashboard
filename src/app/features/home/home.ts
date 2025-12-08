import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import type { Swiper } from 'swiper/types';
import gsap from 'gsap'; 
import ScrollTrigger from 'gsap/ScrollTrigger';

register();

gsap.registerPlugin(ScrollTrigger); 


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements AfterViewInit {


   ngAfterViewInit() {
    const panels = gsap.utils.toArray<HTMLElement>('.panel');

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1,
          duration: 0.4,
          ease: 'power2.out', 
        }

      });
    });
  }

  onProgress(event: any) {
  console.log(event.detail[1]);
  }

  onSlideChange() {
    console.log('slide changed');
  }

}
