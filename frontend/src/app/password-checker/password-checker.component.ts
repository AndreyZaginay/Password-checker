import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { easyPasswordValidator, mediumPasswordValidator, strongPasswordValidator } from './validators/password.validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.scss'
})
export class PasswordCheckerComponent implements OnInit, OnDestroy {
 
  form!: FormGroup;
  formChangesSub!: Subscription;
  allRed = false;
  allGreen = false;
  firstRed = false;
  bothYellow = false;


  get password(): AbstractControl {
    return this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.initPasswordForm();
    this.formChangesSub = this.form.valueChanges.subscribe(({ password }) => {
      this.allRed = this.password.hasError('minlength');
      this.firstRed = this.password.hasError('easy');
      this.bothYellow = this.password.hasError('medium');
      this.allGreen = this.password.hasError('strong');
    });
  } 

  initPasswordForm(): void {
    this.form = new FormGroup({
      password: new FormControl(null, [Validators.minLength(8), easyPasswordValidator, mediumPasswordValidator, strongPasswordValidator])
    })
  }

  ngOnDestroy(): void {
    this.formChangesSub.unsubscribe();
  }
}
