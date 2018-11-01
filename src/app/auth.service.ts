import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{
constructor() { }
islogin()
{
  return !!localStorage.getItem('token');
}
}