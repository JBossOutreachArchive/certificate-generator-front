import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  title;
  role;
  place;
  certificates;

  constructor() {
  }

  ngOnInit() {
    // TODO: get data from server
    this.title = '@JBossOutreach';
    this.role = 'Mentor @ JBoss';
    this.place = 'Mumbai, IN';
    this.certificates = 1;
  }

}
