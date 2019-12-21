import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { User, UserSignup } from './user.service';
 import { Environment } from '../environments/environments';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthenticationService {


   readonly baseUrl = Environment.baseUrl;

   constructor(private http: HttpClient) { }

   login(user: User) {
     const body = new URLSearchParams();
     body.set('username', user.username);
     body.set('password', user.password);

     // Store Username in Local Storage
     localStorage.setItem('username',user.username);

     const options = {
       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                 .set('Access-Control-Allow-Origin', '*')
     };
     return this.http.post(this.baseUrl + 'api-token-auth/', body.toString(), options);
   }

   signup(userSignup: UserSignup) {
    const details = {
      'name': userSignup.name,
      'user': {
        'email': userSignup.email,
        'username': userSignup.username,
        'password': userSignup.password
      }
    };
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Access-Control-Allow-Origin', '*')
    };

    if(userSignup.role == "user"){
      return this.http.post(this.baseUrl+"api/user/", JSON.stringify(details), options);
    }
    else if(userSignup.role == "issuer"){
      return this.http.post(this.baseUrl+"api/org/", JSON.stringify(details), options);
    }
   }

   isAuthenticated() {
     const token_exists = 'token' in localStorage;
     let date_exists = 'expires_at' in localStorage;
     // if date exists
     if (date_exists) {
       // check if date expired
       const date = new Date(localStorage.getItem('expires_at'));
       if (date < new Date()) {
         date_exists = false;
       }
     }
     return token_exists && date_exists;
   }

 }
