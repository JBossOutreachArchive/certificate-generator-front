import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public show:boolean = false;
  constructor(private mAuth: AuthenticationService) { }

  ngOnInit() {
    if(this.mAuth.isAuthenticated()){
      this.show = true;
    } else {
      this.show = false;
    }
  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

}
