import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {
 customize:FormGroup;
  details: string[] = ['background','Text Font', 'Text Color'];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.customize= this.fb.group({
     background:'',
     textfont:'',
    textcolor:''
   })
  }

}
