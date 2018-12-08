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

  constructor(private formBuilder: FormBuilder) {
    this.certificateForm = this.formBuilder.group({
      template: ['', Validators.required],
      issued_to: ['', Validators.required],
      issued_for: ['', Validators.required],
      date: ['', Validators.required]
    });

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

}
