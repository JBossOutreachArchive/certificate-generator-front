import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userNameShow:boolean = false;
  public userName:any = '';
  constructor(private mAuth: AuthenticationService) { }

  ngOnInit() {
    if(this.mAuth.isAuthenticated()){
      this.userNameShow = true;
      this.userName = localStorage.getItem('user_name')
    } else {
      this.userNameShow = false;
    }
  }

}
