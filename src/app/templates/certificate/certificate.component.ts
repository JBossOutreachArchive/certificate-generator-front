import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  certificatesFragment;

  constructor() { }

  ngOnInit() {
  }

  onClickArrow() {
    this.certificatesFragment = '0';
  }

}
