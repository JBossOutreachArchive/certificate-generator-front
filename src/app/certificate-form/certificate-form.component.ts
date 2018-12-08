import { Component, OnInit } from '@angular/core';

import { CertificateData } from './certificate-data';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  certificate_data = new CertificateData(null, null, null, null);

  preview() {
    window.location.href = "http://localhost:4200/basic";
  }
}