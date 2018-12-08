import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-certificate-template',
  templateUrl: './certificate-template.component.html',
  styleUrls: ['./certificate-template.component.css']
})
export class CertificateTemplateComponent implements OnInit {

	@Input() data;

  constructor() { }

  ngOnInit() {
  }

}
