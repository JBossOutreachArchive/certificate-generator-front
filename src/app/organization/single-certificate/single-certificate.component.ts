import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-certificate',
  templateUrl: './single-certificate.component.html',
  styleUrls: ['./single-certificate.component.css']
})
export class SingleCertificateComponent implements OnInit {

  certificateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.certificateForm = this.formBuilder.group({
      template: ['', Validators.required],
      issued_to: ['', Validators.required],
      issued_for: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.certificateForm);
  }

}
