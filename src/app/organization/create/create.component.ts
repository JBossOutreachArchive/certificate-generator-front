import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  certName: string;
  certDesc: string;
  certDate = new FormControl(new Date());
  certStyle: string;

  constructor() { }

  ngOnInit() {
  }

}
