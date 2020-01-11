import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  isLoggedIn = new BehaviorSubject<boolean>(false);
 checkStatus = this.isLoggedIn.asObservable();
 changeStatus(val: any) {
   this.isLoggedIn.next(val);
 }

  constructor() { }
}
