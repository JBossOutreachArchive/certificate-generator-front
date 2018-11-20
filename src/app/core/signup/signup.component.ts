import { Component, OnInit } from '@angular/core';
import { AuthService } from '../backend_assets/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../backend_assets/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: string;
  user: User;
  expiration_date: Date;
  private mAuth: AuthService;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = this.formBuilder.group({ email: ['', Validators.required], password: ['', Validators.required] });
  }
  ngOnInit() { }
  onSubmit() {
    this.user = {
     email: this.signupForm.value.email,
     password: this.signupForm.value.password
    }
    this.mAuth.login(this.user).subscribe(
      data => {
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