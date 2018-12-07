import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name;
  mail;
  imageSrc;

  constructor() {
  }

  ngOnInit() {
    // TODO: Get data from current user
    this.name = 'Name Surname';
    this.mail = 'email@email.com';
    //  this.imageSrc = getImageSrc();
    if (this.imageSrc == null) {
      this.imageSrc = 'https://www.materialui.co/materialIcons/social/person_black_216x216.png';
    }
  }

  onClickEdit() {
    // TODO: edit name and email and send it to the server
    console.log('onClickEdit');
  }

}
