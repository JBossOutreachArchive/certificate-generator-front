import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-groups',
  templateUrl: './student.groups.component.html',
  styleUrls: ['./student.groups.component.css']
})
export class StudentGroupsComponent implements OnInit {

  groupsModule;

  constructor() {
  }

  ngOnInit() {
  }

  onClickView() {
    this.groupsModule = '0';
  }

}
