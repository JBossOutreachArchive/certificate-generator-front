import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {
  certificate:FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.certificate= this.fb.group({
      template:['',Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      date:['', Validators.required]
    });

  }
 get template(){   return this.certificate.get('template') }
   get name(){   return this.certificate.get('name') }
   get description(){   return this.certificate.get('description') }
   get date(){   return this.certificate.get('date') }

}
