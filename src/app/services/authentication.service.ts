import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

class User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public loginUser(user: User){
    //authenticates user while login attempt
    const options = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
      })
    }
    return this.httpClient.post(`${this.apiUrl}/api-token-auth/`,JSON.stringify(user),options)
  }

  private signupNewUser(){
    //this can be a student/organization
  }

}
