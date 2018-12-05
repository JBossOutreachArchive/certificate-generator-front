import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { User, userSignup } from './user.service';
 import { environment } from '../environments/environments';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthenticationService {

  
   readonly baseUrl = environment.baseUrl;

   constructor(private http: HttpClient) { }

   login(user: User){
     let body = new URLSearchParams();
     body.set('username', user.username)
     body.set('password', user.password);

     let options = {
       headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                 .set('Access-Control-Allow-Origin', '*')
     };
     return this.http.post(this.baseUrl+"api-token-auth/", body.toString(), options)
   }

   signup(userSignup: userSignup){
    let details = {
      "name":userSignup.name,
      "user":{
        "email":userSignup.email,
        "username":userSignup.username,
        "password":userSignup.password
      }
    }

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                .set('Access-Control-Allow-Origin', '*')
    }

    if(userSignup.role == "user"){
      return this.http.post(this.baseUrl+"api/user", details, options);
    }
    else if(userSignup.role == "issuer"){
      return this.http.post(this.baseUrl+"api/org", details, options);
    }
   }
 }