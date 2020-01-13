import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isUserExist: string;
  constructor() { }

  ngOnInit() {
   this.getUserName();
  }

  getUserName() {
    this.isUserExist = localStorage.getItem('user_name');

  }

}
