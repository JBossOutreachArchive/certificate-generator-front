import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailData: string;
  passwordData: string;
  userType: string;
  userTypeValue: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUpUser() {
    if(this.userType == "issuer") {
      this.userTypeValue = true;
    }
    this.authService.signupUser(this.emailData, this.passwordData, this.userTypeValue);
    this.authService.logUserStatus();
  }

}
