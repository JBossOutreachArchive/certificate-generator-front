import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserSignup } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  userSignup: UserSignup;
  passwordMismatch: boolean;
  expiration_date;
  error;

  constructor(
    private formBuilder: FormBuilder,
    private mAuth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      role: ['user', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.signupForm.controls; }

  checkPasswords() {
    this.passwordMismatch = true;
    const password = this.signupForm.value.password;
    const confirmPassword = this.signupForm.value.confirmPassword;

    if (password === confirmPassword) {
      this.passwordMismatch = false;
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) {
      this.userSignup = {
        name : this.signupForm.value.name,
        username: this.signupForm.value.username,
        password: this.signupForm.value.password,
        email: this.signupForm.value.email,
        role: this.signupForm.value.role
       };

       this.mAuth.signup(this.userSignup).subscribe(
         data => {
           console.log(data);
         },
         error => {
           this.error = error.error.non_field_errors;
         }
       );
    } else {
      return;
    }
  }
}
