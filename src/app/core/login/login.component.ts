import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;
  user: User;
  error;
  loading;

  constructor(
    private formBuilder: FormBuilder,
    private mAuth: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['student']
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.error = '';
    this.submitted = true;

    if (this.signinForm.valid) {

      this.user = {
        username: this.signinForm.value.username,
        password: this.signinForm.value.password
      };

      this.loading = 'Loading...';

      this.mAuth.login(this.user.username, this.user.password)
        .then((res) => {
          console.log(res);
          this.loading = '';
          if (this.signinForm.value.role === 'student') {
            this.router.navigate(['/student']);
          } else {
            this.router.navigate(['/organization']);
          }
        })
        .catch((err) => {
          this.loading = '';
          this.error = err;
        });
    }
  }
}
