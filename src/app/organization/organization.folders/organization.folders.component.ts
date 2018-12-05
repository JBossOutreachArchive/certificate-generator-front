import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-folders',
  templateUrl: './organization.folders.component.html',
  styleUrls: ['./organization.folders.component.css']
})
export class OrganizationFoldersComponent implements OnInit {

  foldersModule;

  constructor() { }

  ngOnInit() {
  }

  onClickView() {
    this.foldersModule = '0';
  }

}
