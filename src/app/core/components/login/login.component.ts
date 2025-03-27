import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CustomInputComponent } from '../../../shared/components/custom-input/custom-input.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sgi-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    CustomInputComponent,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  required = true;
  group = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  login(){}
}
