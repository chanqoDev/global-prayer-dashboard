

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
import { ButtonComponent } from '../button/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


/** @title Form field with hints */
@Component({
  selector: 'form-component',
  templateUrl: 'form-component.html',
  styleUrls: ['form-component.css'],
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, ButtonComponent,
  ],
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
    region: new FormControl('USA', Validators.required),
    request: new FormControl('', [Validators.required]),
    date: new FormControl(''),
    urgency: new FormControl('low', Validators.required),
  });

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

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
      this.http.post('http://localhost:4000/api/prayers', this.form.value).subscribe({
        next: (res) => {
          // console.log('✅ Prayer submitted:', res)
          this.snackBar.open('🙏 Your prayer has been submitted!', 'Close', {
          duration: 4000,
          panelClass: ['snackbar-success']
          });
          this.form.reset(); 
        },
         error: (err) => {
          this.snackBar.open('❌ Submission failed. Please try again.', 'Close', {
          duration: 4000,
          panelClass: ['snackbar-error']
        });
      },      });
    } else {
      this.snackBar.open('⚠️ Please fill out all required fields.', 'Close', {
      duration: 4000,
      panelClass: ['snackbar-warning']
    });
    }
  }
}
 

 