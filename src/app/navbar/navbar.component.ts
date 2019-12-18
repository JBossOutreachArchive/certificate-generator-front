import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  // Check if User is Logged In
  isLoggedin(){
    const token_exists = 'token' in localStorage;
    if(token_exists){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){

    // Remove Token and expiry date
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');

    // Redirect to home/login page
    this.router.navigateByUrl('/');

  }
  ngOnInit() {
  }

}
