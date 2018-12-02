import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, userSignup} from './user.service';
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

  login(u: User) {
    let body = new URLSearchParams();
    body.set('username', u.username);
    body.set('password', u.password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Access-Control-Allow-Origin', '*')
    };
    return this.http.post(this.baseUrl + 'api-token-auth/', body.toString(), options);
  }

  signup(userSignup: userSignup) {
    const credential = firebase.auth.EmailAuthProvider.credential(userSignup.email, userSignup.password);
    return this.state.auth.createUserWithEmailAndPassword(userSignup.email, userSignup.password);
  }

}
