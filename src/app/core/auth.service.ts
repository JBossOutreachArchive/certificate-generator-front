import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of, Subject, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { switchMap, startWith, tap } from 'rxjs/operators';
// import 'rxjs/add/operator/switchMap';

import { User } from './user';


@Injectable()
export class AuthService implements OnDestroy{

  errorData: string = "";
  user: Observable<User>;
  userSubscription: Subscription;
  userData: any;
  loggedIn: boolean = false;
  currentUserData = null;
  

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          // Logged In - Return user data from Firebase
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          // Logged Out - Return null
          return of(null)
        }
      }),
      // Set user data in local storage
      tap(user => localStorage.setItem('user', JSON.stringify(user))),
      //  Get and use user data when starting authentication
      startWith(JSON.parse(localStorage.getItem('user')))
    );
    this.userSubscription = this.afAuth.user.subscribe((data) => {
        this.userData = data;
    })
  }

  checkIsLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async logUserStatus() {
    const user = await this.checkIsLoggedIn();
    this.currentUserData = user;
    if (user != null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  // Create a new user with data from the Sign Up Form
  signupUser(email: string, password: string, signupData: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.logUserStatus();
        this.setUserDoc(user.user, signupData); // Create new user document
        this.router.navigate(['/dashboard']);
      })
      .catch(
        error => {
          this.errorData = error.message;
        }
      )
  }

  // Update data for the user
  updateUser(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data)
  }

  // Login to an existing user account
  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        this.logUserStatus();
        this.router.navigate(['/dashboard']);
      }
      )
      .catch(
        error => {
          this.errorData = error.message;
        }
      )
  }

   // Sign out the user
  signoutUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  // Create a new User Document
  private setUserDoc(user, signupData) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      isIssuer: signupData
    }
    return userRef.set(data, { merge: true })
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
