import { Component, OnInit, Input } from '@angular/core';

  @Component({
    selector: 'app-certificate-vittal',
    templateUrl: './certificatev.component.html',
    styleUrls: ['./certificatev.component.css']
  })
  export class CertificateVittalComponent implements OnInit {
@Input() certificateForm;
    ifFieldChosen = true;

    constructor() { }

    ngOnInit() {
    }

}
