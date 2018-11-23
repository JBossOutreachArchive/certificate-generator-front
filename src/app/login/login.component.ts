import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from './../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=
{
  email:'',
  password:''
};
  constructor(private router:Router,private authService: AuthService) { }
  signIn() {
     this.authService.login(this.user.email, this.user.password)
        .then((res) => {
           console.log(res);

           this.router.navigate(['/dashboard']);
        })
       .catch((err) => window.alert(err));
  }
  ngOnInit() {
  }

}
