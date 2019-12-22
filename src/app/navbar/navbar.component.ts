import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  
 checkUserStatus() {
  return localStorage.getItem('token') !== null
  }

  logout(){

    // Remove Login Token from LocalStorage
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    // Return to Main Page
    this.router.navigateByUrl('/');

  }

  ngOnInit() {
  }

}
