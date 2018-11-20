import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(){
    // User role not included in payload
    return this.auth.isAuth("/api/issue_certificate/")
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
