import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logUserStatus();
  }

  logOutUser(){
    this.authService.signoutUser();
    this.authService.logUserStatus();
  }

}
