import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-certgenerate',
  templateUrl: './certgen.component.html',
  styleUrls: ['./certgen.component.css']
})

export class CertificateGenerateComponent implements OnInit {

  inputs: string[] = [' ','003','Name Surname', 'Description', ' '];
  
  constructor() {
  }

  onSubmit() {
    console.log(this.inputs);
  }

  ngOnInit() {
  }

}
