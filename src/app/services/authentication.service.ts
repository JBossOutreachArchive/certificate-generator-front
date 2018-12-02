import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {userSignup} from './user.service';
import {environment} from '../environments/environments';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthenticationService {

  private user: Observable<firebase.User>;
  private information: firebase.User = null;

  readonly baseUrl = environment.baseUrl;

  constructor(private state: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.user = state.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.information = user;
        } else {
          this.information = null;
        }
      }
    );
  }

  login(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this.state.auth.signInWithEmailAndPassword(email, password);
  }

  signup(userSignup: userSignup) {
    let details = {
      'name': userSignup.name,
      'user': {
        'email': userSignup.email,
        'username': userSignup.username,
        'password': userSignup.password
      }
    };

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Access-Control-Allow-Origin', '*')
    };

    if (userSignup.role == 'user') {
      return this.http.post(this.baseUrl + 'api/user', details, options);
    } else if (userSignup.role == 'issuer') {
      return this.http.post(this.baseUrl + 'api/org', details, options);
    }
  }
}
