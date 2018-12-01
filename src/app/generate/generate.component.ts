import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
class NgIfElse {
  show: boolean = true;
}
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
   details: string[] = ['','Name Surname', 'Description', ' '];
  certificate:FormGroup;
   template: string;
  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.certificate= this.fb.group({
      template:'',
      name:['', Validators.required],
      description:['', Validators.required],
      date:['', Validators.required]
    })
    this.certificate.get('template').valueChanges.subscribe(value => {
      this.template = value;
    });
  }

   get name(){   return this.certificate.get('name') }
   get description(){ return this.certificate.get('description') }
   get date(){   return this.certificate.get('date') }

 }
