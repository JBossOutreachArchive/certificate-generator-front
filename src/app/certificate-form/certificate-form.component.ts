import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificateData } from './certificate-data';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent implements OnInit {

  constructor(private router: Router) { }

  certificate_data = new CertificateData(null, null, null, null);

  ngOnInit() {
  }

  preview() {
    this.router.navigate(['basic']);
  }
}
