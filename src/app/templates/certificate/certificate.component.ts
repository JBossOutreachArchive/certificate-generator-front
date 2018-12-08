import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor() {
  }

  @Input() inputs;
  @Input() fonts;
  @Input() colors;

  ngOnInit() {
  }

}
