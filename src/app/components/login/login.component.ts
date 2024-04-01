import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private loginSvc: LoginServiceService) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.loginSvc.login(this.loginForm.value).subscribe((res:any)=>{
        console.log(res);
      })
    }else{
      alert('Not valid');
    }
  }

  logOut(){
    sessionStorage.removeItem('token')
  }
}
