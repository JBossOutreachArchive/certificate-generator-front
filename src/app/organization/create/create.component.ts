import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  certName: string;
  certDesc: string;
  certDate: any;
  certStyle: string;

  constructor() { }

  ngOnInit() {
  }

}
