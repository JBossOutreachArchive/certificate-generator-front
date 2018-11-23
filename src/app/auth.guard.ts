import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {Router} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
   constructor(private router: Router, private authService: AuthService) { };
     canActivate() {
         if ( this.authService.isLoggedIn() ) {
             return true;
         }
         else{
            window.alert("You are not logged in");
         this.router.navigate(['/login']);
         return false;
       }
     }
 }
