import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';
import { AlertdialogboxComponent } from '../alertdialogbox/alertdialogbox.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private svc: SignUpService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm(): FormGroup {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
    return this.signUpForm;
  }

  signedUp() {
    if (this.signUpForm.valid) {
      this.svc.signUp(this.signUpForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.status === 'success') {
            this.dialog.open(AlertdialogboxComponent, {
              data: {
                message: 'Sign up successfully, Click on OK to Login',
              },
            });
          }
        },
        error: (err) => {
          console.log(err);
          if (err.status === 422) {
            if (err.error.status === 'fail') {
              this.dialog.open(AlertdialogboxComponent, {
                data: {
                  message: err.error.response,
                },
              });
            }
          }
        },
      });
    } else {
      console.log('Invalid Form');
    }
  }

  backToLogin() {
    this.route.navigate(['login']);
  }
}
