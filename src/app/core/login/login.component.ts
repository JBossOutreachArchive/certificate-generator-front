import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;
  user: User;
  expiration_date;
  error;

  constructor(
    private formBuilder: FormBuilder,
    private mAuth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student']
    });
  }

  get f() { return this.signinForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.signinForm.valid) {

      this.user = {
        username: this.signinForm.value.username,
        password: this.signinForm.value.password
       };

       this.mAuth.login(this.user).subscribe(
         data => {

           this.expiration_date = new Date();
           this.expiration_date.setTime(this.expiration_date.getTime() + (60 * 60 * 1000));
           localStorage.setItem('token', data['token']);
           localStorage.setItem('expires_at', this.expiration_date.toString());
           if (this.signinForm.value.role === 'student') {
             this.router.navigate(['/student']);
           } else {
             this.router.navigate(['/organization']);
           }
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
