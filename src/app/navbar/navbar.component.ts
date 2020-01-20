import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  username:string;

  ngOnInit() {
  }

  isLoggedIn(){
    const username_exists = localStorage.getItem('username');
    if(username_exists){
      this.username = username_exists;
      return true;
    }
    
    return false;
  }

}
