import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html'
})
export class ButtonComponent {
  @Input() disabled = false;
}
