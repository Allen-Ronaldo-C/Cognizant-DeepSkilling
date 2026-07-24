import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  profileForm = new FormGroup({
    name: new FormControl(''),
    department: new FormControl(''),
    college: new FormControl('')
  });

  submit() {
    console.log(this.profileForm.value);
  }

}
