import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Certificate Generator';
  constructor(private authService: AuthService){}
  ngOnInit() {
    this.authService.checkIsLoggedIn();    
  }
}
