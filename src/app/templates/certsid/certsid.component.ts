import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certsid',
  templateUrl: './certsid.component.html',
  styleUrls: ['./certsid.component.css']
})
export class CertsidComponent implements OnInit {
@Input() certificateForm;
  constructor() { }

  ngOnInit() {
  }

}
