import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showHide: boolean;
  constructor(
    private router: Router,
    private statusService:StatusService
    ) { }

  ngOnInit() {
    this.statusService.checkStatus.subscribe(val => this.showHide = val);

  }




   logout() {
    this.statusService.changeStatus(false);
     localStorage.clear();
     this.router.navigate(['/']);

   }


}
