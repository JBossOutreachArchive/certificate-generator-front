import {Component, OnInit} from '@angular/core';
import {StudentComponent} from '../student.component';
import {StudentGroupsComponent} from '../student.groups/student.groups.component';

@Component({
  selector: 'app-student-certificates',
  templateUrl: './student.certificates.component.html',
  styleUrls: ['./student.certificates.component.css']
})
export class StudentCertificatesComponent implements OnInit {

  certificate;
  groupsFragment;

  constructor() {
  }

  ngOnInit() {
  }

  onClickCertificate() {
    this.certificate = '0';
  }

  onClickArrow() {
    this.groupsFragment = '0';
  }

}
