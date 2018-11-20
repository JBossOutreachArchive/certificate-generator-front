import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
  readonly apiUrl = environment.apiUrl;

  private getUserInfo(){
    //authenticates user while login attempt
  }

  private  signupNewUser(){
    //this can be a student/organization
  }

  public isAuth(endpoint="/api/get_certificates/"){
    return this.httpClient.get(`${this.apiUrl}${endpoint}`, { withCredentials: true })
  }
}
