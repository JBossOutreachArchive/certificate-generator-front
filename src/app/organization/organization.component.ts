import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
optional:FormGroup;
info: string[] = ['','left', 'top'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.optional= this.fb.group({
      name:['',Validators.required],
    left:['',Validators.required],
   top:['',Validators.required]
  })
  }
  get name(){   return this.optional.get('name') }
    get left(){ return this.optional.get('left') }
    get top(){   return this.optional.get('top') }



}
