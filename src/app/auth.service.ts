import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : Observable<firebase.User>;
  private information: firebase.User = null;

  constructor(private state:AngularFireAuth, private router: Router) {
this.user=state.authState;
    this.user.subscribe(
        (user) => {
          if (user) {
            this.information = user;
          }
          else {
            this.information = null;
          }
        }
      );
}
login(email, password) {
   const credential = firebase.auth.EmailAuthProvider.credential( email, password );
return this.state.auth.signInWithEmailAndPassword(email, password)
}
  isLoggedIn() {
  if (this.information == null ) {
      return false;
    } else {
      return true;
    }
  }
}
