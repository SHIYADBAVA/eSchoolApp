import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admaddclass',
  templateUrl: './admaddclass.component.html',
  styleUrls: ['./admaddclass.component.css']
})
export class AdmaddclassComponent {
  addressForm = this.fb.group({
    classNo: [null, Validators.required],
    classname: [null, Validators.required],
    classteacher: [null, Validators.required],
    address: [null, Validators.required],
    stdcount: [null, Validators.required],
    state: [null, Validators.required],
  });


  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
