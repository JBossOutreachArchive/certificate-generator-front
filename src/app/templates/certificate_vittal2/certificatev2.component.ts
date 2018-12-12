import { Component, OnInit, Input} from '@angular/core';

 @Component({
   selector: 'app-certificate-vittal2',
   templateUrl: './certificatev2.component.html',
   styleUrls: ['./certificatev2.component.css']
 })
 export class CertificateVittal2Component implements OnInit {
@Input() certificateForm;
   constructor() { }

   ngOnInit() {
   }

 }
