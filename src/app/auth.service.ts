import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {Router} from "@angular/router";
import { LoginComponent } from './core/login/login.component';
export class user{
  isLoggedIn(): boolean{
    return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{

  constructor(private user :user,private router:Router) { };
  canActivate()
  {
    console.log("Guard works!");
    if(this.user.isLoggedIn())
    { return true;}
    else{
    window.alert("You are not logged in");
    this.router.navigate(['/login']);
    return false;
  }
  }

}
