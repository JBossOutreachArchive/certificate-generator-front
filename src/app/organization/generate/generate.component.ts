import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  validateForm() {
    if (document.getElementById('company').nodeValue.length === 0
      || document.getElementById('title').nodeValue.length === 0
      || document.getElementById('name').nodeValue.length === 0
      || document.getElementById('description').nodeValue.length === 0
      || document.getElementById('photo').nodeValue.length === 0
      || document.getElementById('date').nodeValue.length === 0
      || document.getElementById('signature').nodeValue.length === 0) {
      console.log('Not filled.');
      // it' ll be changed later
    }
}

}
