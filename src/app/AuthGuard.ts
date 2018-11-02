import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.loginService.isLoggedIn().pipe(
      map(e => {
        if (e) {
          return true;
        } else {
          ...
        }
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }   

}
