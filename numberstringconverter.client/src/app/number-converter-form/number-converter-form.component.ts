import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { retry } from 'rxjs';

@Component({
  selector: 'app-number-converter-form',
  templateUrl: './number-converter-form.component.html',
  styleUrl: './number-converter-form.component.css'
})
export class NumberConverterFormComponent {
  converterForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.converterForm = this.fb.group({
      // we only accept max 1000000000, min 0, 2 decimal places
      number: ['0', [Validators.required, Validators.max(1000000000), Validators.min(0),Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]]
    });
  }

  onSubmit() {
    if (this.converterForm.valid) {
      // make redirect to NumberConverterOutputComponent
      this.router.navigate(["number-converter-output", this.converterForm.value.number]);
      console.log('Form submitted:', this.converterForm.value.number);
    } else {
      console.error('Invalid Input');
    }
  }
}
