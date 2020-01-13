import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isUserLoggedIn = false;
  constructor( private router: Router) {

  }

  ngOnInit() {
   this.statusCheck();
  }

  statusCheck() {
    this.isUserLoggedIn =  localStorage.getItem('token') != null;
   }

  logout() {
   this.statusCheck();
     localStorage.clear();
     this.router.navigate(['/']);

   }



}
