import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  inputs: string[] = ['JBoss Community', 'Google Code In 2018', 'Name Surname', 'Description', '2018-12-07'];
  fonts: string[] = ['Arial', 'Arial', 'Brush Script MT', 'Arial', 'Arial', 'Arial', 'Arial'];
  colors: string[] = ['black', 'black', 'blue', 'black', 'black', 'black', 'black'];

  ngForm = new FormGroup({
    template: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  error: string;
  field: string;
  i = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    let a = true;
    Object.keys(this.ngForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.ngForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          a = false;
          this.error = 'Please fill in the ' + key + ' field';
        });
      }
    });
    if (a) {
      this.error = '';
    }
  }

  onFieldChanged() {
    switch (this.field) {
      case 'ID':
        this.i = 0;
        break;
      case 'Company':
        this.i = 1;
        break;
      case 'Title':
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

}
