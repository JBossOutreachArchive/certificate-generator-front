import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  user: User;
  expiration_date: Date;

  constructor(private mAuth: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({ username: ['', Validators.required], password: ['', Validators.required] });
  }

  ngOnInit() {
  }

  onSubmit() {

    this.user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.mAuth.login(this.user).subscribe(
      data => {
        // Set token expiration date to 1 hr
        this.expiration_date = new Date();
        this.expiration_date.setTime(this.expiration_date.getTime() + (60 * 60 * 1000));

        localStorage.setItem("token", data['token']);
        localStorage.setItem("expires_at", this.expiration_date.toString());
        console.log("Saved");
        this.router.navigate(['/student']);
      },
      error => {
        this.error = error.error.non_field_errors;
      }
    );
  }

}
