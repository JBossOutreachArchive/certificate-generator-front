import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  @Input() certificateForm;
  constructor() { }

  ngOnInit() {
  }
}
