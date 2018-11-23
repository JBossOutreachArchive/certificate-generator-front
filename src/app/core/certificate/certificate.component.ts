import { Component, OnInit, Inject} from '@angular/core';
import {CERT} from "./certificate-display.tokens";
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  constructor(@Inject(CERT) public cert) { }

  ngOnInit() {
    console.log(this.cert)
  }
}
