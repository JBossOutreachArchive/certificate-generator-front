import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private mAuth: AuthenticationService, private router: Router) {}
  canActivate(): boolean {
    if (this.mAuth.isAuthenticated()) {
      return true;
    }else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
