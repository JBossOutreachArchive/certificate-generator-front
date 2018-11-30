import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  File(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
       if(type!=='text/csv'&& type!=='application/vnd.ms-excel')
        window.alert("This file is not CSV")
        else
        if(size/1048576>5)
        window.alert('This file has more than 5MB')

      }
    }
  title = 'app';

  columnDefs = [
      {headerName: 'Student Name', field: 'name',checkboxSelection:true},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [
      { name: 'Chandler', date: '10/10/2018', desc: 'For being Sarcastic' },
      { name: 'Joey', date: '10/10/2018', desc: 'For eating all the food' },
      { name: 'Phoebe', date: '10/10/2018', desc: 'For being the normal one' }
  ];


}
