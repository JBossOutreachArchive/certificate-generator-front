import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 @Component({
   selector: 'app-certgenerate',
   templateUrl: './certgen.component.html',
   styleUrls: ['./certgen.component.css']
 })

 export class CertificateGenerateComponent implements OnInit {

   inputs: string[] = ['','Name Surname', 'Description', ' '];

   template: string;
   certificateForm: FormGroup;

   constructor(private formBuilder: FormBuilder) {
     this.certificateForm = this.formBuilder.group({
       template: ['', Validators.required],
       name: ['', Validators.required],
       description: ['', Validators.required],
       date: ['', Validators.required]
     })

     this.certificateForm.get('template').valueChanges.subscribe(val => {
       // change template variable to chosen template.
       this.template = val;
     });
    }

   onSubmit() {
     console.log(this.certificateForm);
   }

   ngOnInit() {
   }

 }