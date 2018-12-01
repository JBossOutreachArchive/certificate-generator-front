import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-certificate1',
  templateUrl: './certificate1.component.html',
  styleUrls: ['./certificate1.component.css']
})
export class Certificate1Component implements OnInit {
  @Input() details;
    @Input() certificate;

  constructor() { }

  ngOnInit() {
  }

}
