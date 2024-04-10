import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser } from '../interfaces/login-interface';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private apiUrl = `${environment.apiurl}auth/user/login`;
  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, payload).pipe(
      tap((response) => {
        if ( response.response.tokens[0].token) {
          sessionStorage.setItem('token', response.response.tokens[0].token);
        }
      })
    );
  }
}
