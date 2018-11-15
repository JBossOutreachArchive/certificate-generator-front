import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  @Input() inputs;

  constructor() {
  }

  ngOnChanges() {
      console.log(this.inputs);
  }

  ngOnInit() {
  }
  
}
