import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

class User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  error:boolean;
  success:boolean;
  errorMessage:string;
  user:User;

  constructor(private auth:AuthenticationService, private builder: FormBuilder){
    this.user = {
      username:"",
      password:""
    }
    this.form = this.builder.group(
      {
        username: new FormControl(this.user.username,[Validators.required]),
        password: new FormControl(this.user.password,[Validators.required])
      }
    );
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  ngOnInit(){}

  onSubmit(){
    const {username,password} = this.form.value
    this.user = {
      username,
      password
    }
    this.auth.loginUser(this.user).subscribe(
      success =>{
        this.success = true
      },
      error =>{
        this.error = true
        this.success = false
        this.errorMessage = error.error.non_field_errors 
        ? error.error.non_field_errors.join("\n") 
        : JSON.stringify(error.error)
        console.log(error)
      }
    )
  }
}
