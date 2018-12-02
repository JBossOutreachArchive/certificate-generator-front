import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {userSignup} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  userSignup: userSignup;
  passwordMismatch: boolean;
  error;
  loading;

  constructor(
    private formBuilder: FormBuilder,
    private mAuth: AuthenticationService,
    private router: Router
  ) {
  }

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

  get f() {
    return this.signupForm.controls;
  }

  checkPasswords() {
    this.passwordMismatch = true;
    let password = this.signupForm.value.password;
    let confirmPassword = this.signupForm.value.confirmPassword;

    if (password === confirmPassword) {
      this.passwordMismatch = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.signupForm.valid) {

      this.loading = 'Loading...';

      this.userSignup = {
        name: this.signupForm.value.name,
        username: this.signupForm.value.username,
        password: this.signupForm.value.password,
        email: this.signupForm.value.email,
        role: this.signupForm.value.role
      };

      this.mAuth.signup(this.userSignup)
        .then((res) => {
          console.log(res);
          this.loading = '';
          if (this.userSignup.role === 'student') {
            this.router.navigate(['/student']);
          } else {
            this.router.navigate(['/organization']);
          }
        })
        .catch((err) => {
          this.loading = '';
          this.error = err;
        });
    } else {
      this.error = 'Invalid form';
      return;
    }
  }
}
