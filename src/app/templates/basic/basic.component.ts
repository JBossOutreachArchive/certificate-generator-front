import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @Input() certificateForm;
  @Input() color;
  @Input() font;
  @Input() bgimage;
  constructor() { }

  ngOnInit() {
  }
}
