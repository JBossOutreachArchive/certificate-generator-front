import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
certificate:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.certificate= this.formbuilder.group({
    name:['',Validators.required],
    description:['',Validators.required,Validators.minLength(4)],
    date:['',Validators.required]
   })
  }
  get name(){   return this.certificate.get('name') }
    get description(){ return this.certificate.get('description') }
    get date(){   return this.certificate.get('date') }
}
