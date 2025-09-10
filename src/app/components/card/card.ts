import { Component } from '@angular/core';
import { FormField } from '../form-component/form-component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormField],
  templateUrl: './card.html'
})
export class Card {

}
