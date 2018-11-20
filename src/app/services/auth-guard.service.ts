import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthenticationService, public router:Router) { }

  canActivate(){
    return this.auth.isAuth()
    .pipe(map(result=>{
      console.log(result)
      return true
    }),
    catchError(error=>{
      console.log(error)
      this.router.navigate(['/login'])
      return of(false)
    }))
  }
}
