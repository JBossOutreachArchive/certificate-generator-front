import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private router:Router , private __examinationService:AuthService ){}
canActivate(
next:ActivatedRouteSnapshot,
state:RouterStateSnapshot):boolean {
if (this.__examinationService.islogin())
{ 
   return true;
}
   else
{
  this.router.navigate(['/login']);
}
}
}