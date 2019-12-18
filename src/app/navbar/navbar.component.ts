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

  isLoggedin(){
    const name_exists = 'username' in localStorage;
    if(name_exists){
      this.username = localStorage.getItem('username');
      return true;
    }
    else{
      return false;
    }
  }
  ngOnInit() {
  }

}
