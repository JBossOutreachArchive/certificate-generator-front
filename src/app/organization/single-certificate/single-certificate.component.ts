import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-certificate',
  templateUrl: './single-certificate.component.html',
  styleUrls: ['./single-certificate.component.css']
})
export class SingleCertificateComponent implements OnInit {
  template: string;
  certificateForm: FormGroup;
  customize = 'hidden';
  color: string[] = ['', '', '', '', '', ''];
  font: string[] = ['', '', '', '', '', ''];
  bgimage = ' ';
  elementselector='ID';
  i=0;
  constructor(private formBuilder: FormBuilder) {
    this.certificateForm = this.formBuilder.group({
      template: ['', Validators.required],
      issued_to: ['', Validators.required],
      issued_for: ['', Validators.required],
      date: ['', Validators.required]
    })

    this.certificateForm.get('template').valueChanges.subscribe(val => {
      // change template variable to chosen template.
      this.template = val;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.certificateForm);
  }

  onElement() {
    switch (this.elementselector) {
      case 'ID':
        this.i = 0;
        break;
      case 'Heading':
        this.i = 1;
        break;
      case 'Sub heading':
        this.i = 2;
        break;
      case 'Name':
        this.i = 3;
        break;
      case 'Description':
        this.i = 4;
        break;
      case 'Signature':
        this.i = 5;
        break;
      case 'Date':
        this.i = 6;
        break;
    }
  }

  onCustom(){
    if(this.customize=='hidden'){
      this.customize = 'visible';
    } else {
      this.customize = 'hidden';
    }
  }

}
