import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
@Input() certificateForm;
  constructor() { }

  ngOnInit() {
  }

}
