

import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {merge} from 'rxjs';
// date picker Material UI Component 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { HttpClient } from '@angular/common/http';


/** @title Form field with hints */
@Component({
  selector: 'form-component',
  templateUrl: 'form-component.html',
  styleUrls: ['form-component.css'],
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormField{
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');
  

  // Define a full reactive form
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    request: new FormControl('', [Validators.required]),
    date: new FormControl(''),
    urgency: new FormControl(''),
  });

  // inject httpCLient
  // constructor(private http: HttpClient) {
  //   merge(this.email.statusChanges, this.email.valueChanges)
  //     .pipe(takeUntilDestroyed())
  //     .subscribe(() => this.updateErrorMessage());
  // }

  constructor(private http: HttpClient) {}

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Please enter a your Email');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

   submitForm() {
    if (this.form.valid) {
      this.http.post('http://localhost:3000/api/prayers', this.form.value).subscribe({
        next: (res) => console.log('✅ Prayer submitted:', res),
        error: (err) => console.error('❌ Error submitting prayer:', err),
      });
    } else {
      console.log('⚠️ Form invalid');
    }
  }
}
 

 