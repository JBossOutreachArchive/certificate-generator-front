import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { User } from './user.service';
 import { environment } from '../../../environments/environment';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthService {

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
 }