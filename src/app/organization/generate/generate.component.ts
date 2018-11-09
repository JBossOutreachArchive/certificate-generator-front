import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})

export class GenerateComponent implements OnInit {

  inputs: string[] = ['JBoss Community', 'Google Code In 2018', 'Name Surname', 'Description', '2018-11-24'];
  ngForm = new FormGroup({
    template: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });
  error: string;

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

}
