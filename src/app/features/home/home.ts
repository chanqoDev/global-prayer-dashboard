import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import type { Swiper } from 'swiper/types';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {

  // onProgress(event: CustomEvent<[Swiper, number]>) {
  //   const [, progress] = event.detail;
  //   console.log('progress:', progress);
  // }
  onProgress(event: any) {
  console.log(event.detail[1]);
}

  onSlideChange() {
    console.log('slide changed');
  }

}
