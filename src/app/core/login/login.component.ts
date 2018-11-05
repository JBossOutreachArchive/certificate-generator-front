import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  loginType: string;

  constructor(public afAuth: AngularFireAuth, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({ email: ['', Validators.required], password: ['', Validators.required], loginType: ['', Validators.required] });
    this.afAuth.auth.onAuthStateChanged(user => {
      if(user){
        if(this.loginType == "issuer"){
          // USER IS ISSUER
          // TODO navigate issuer to correct url
          this.router.navigate(['/student']);
        }else{
          // USER IS OWNER
          // TODO navigate owner to correct url
          this.router.navigate(['/student']);
        }
      }
    });
  }

  login(){
    if(this.loginForm.invalid) return;

    this.loginType = this.loginForm.value.loginType;
    this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).catch(err => {
      this.error = err;
    });
  }

  ngOnInit() {
  }

}
