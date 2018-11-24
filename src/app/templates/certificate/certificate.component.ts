import {Component, Input, OnInit} from '@angular/core';

 @Component({
   selector: 'app-certificate',
   templateUrl: './certificate.component.html',
   styleUrls: ['./certificate.component.css']
 })
 export class CertificateComponent implements OnInit {

   @Input() inputs;
   @Input() certificateForm;

   constructor() {
   }

   ngOnChanges() {
       console.log(this.certificateForm);
   }

   ngOnInit() {
   }
   
 }
