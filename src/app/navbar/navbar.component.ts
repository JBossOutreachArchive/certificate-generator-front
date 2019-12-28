import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public userNameShow:boolean = false;
  public logOutShow:boolean = false;
	public userName:any = '';
  	constructor(private mAuth: AuthenticationService) { }

  ngOnInit() {
  	if(this.mAuth.isAuthenticated()){
  		this.userNameShow = true;
  		this.userName = localStorage.getItem('user_name');
      this.logOutShow = true;
  	}
  	else {
  		this.userNameShow = false;
  	}
  }

  ngOnClickLogOut(){
    localStorage.removeItem('user_name');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.userNameShow = false;
    this.logOutShow = false;
  }

}
