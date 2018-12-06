import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  @Component({
   selector: 'app-generator',
   templateUrl: './generator.component.html',
   styleUrls: ['./generator.component.css']
 }) 
  export class GeneratorComponent implements OnInit {
    data: string[] = ['Name','Desc','XX/XX/XXXX'];

  constructor(private formBuilder:FormBuilder) {}

	   ngOnInit() {

	  }

  }