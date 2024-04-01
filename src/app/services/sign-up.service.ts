import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signUpForm } from '../interfaces/sign-up';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl =
    'https://devapicertifier.helloverify.com/api/auth/user/register';
  constructor(private http: HttpClient) {}

  //for signup

  signUp(payload: signUpForm): Observable<signUpForm> {
    return this.http.post<signUpForm>(`${this.apiUrl}`, payload);
  }
}
