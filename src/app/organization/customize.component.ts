import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'app-customize',
   templateUrl: './customize.component.html',
   styleUrls: ['./customize.component.css']
 })

 export class CustomizeComponent implements OnInit {
   certificateForm:FormGroup;
   template: string;
   inputs: string[] = ['Background','Text Font', 'Text Color'];

   constructor(private formBuilder: FormBuilder) { 
    this.certificateForm= this.formBuilder.group({
      template: ['', Validators.required],
      background:'',
      textfont:'',
      textcolor:''
    })

    this.certificateForm.get('template').valueChanges.subscribe(val => {
      // change template variable to chosen template.
      this.template = val;
    });
   }

   ngOnInit() {
   }

   onSubmit() {
    console.log(this.certificateForm);
  }
  
 }