import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-organization-certificates',
  templateUrl: './organization.certificates.component.html',
  styleUrls: ['./organization.certificates.component.css']
})
export class OrganizationCertificatesComponent implements OnInit {

  foldersFragment;
  certificate;

  constructor() {
  }

  ngOnInit() {
  }

  onClickArrow() {
    this.foldersFragment = '0';
  }

  onClickCertificate() {
    this.certificate = '0';
  }

}
