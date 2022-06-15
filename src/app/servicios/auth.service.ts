import { Injectable } from '@angular/core';
import { NewUser } from '../modelos/new-user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../modelos/login-user';
import { JwtDto } from '../modelos/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }
}
