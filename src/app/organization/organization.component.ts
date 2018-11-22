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

  title = 'app';

    columnDefs = [
        {headerName: 'Student Name', field: 'name',checkboxSelection:true},
        {headerName: 'Date', field: 'date', sort: 'desc', cellRenderer: (date) => date.value.toLocaleDateString() },
        {headerName: 'Certificate Description', field: 'desc'}
    ];

    rowData = [
        { name: 'Phoebe', date: new Date('10/1/2018'), desc: 'For being the normal one' }
        { name: 'Joey', date: new Date('10/2/2018'), desc: 'For eating all the food' },
        { name: 'Chandler', date: new Date('10/3/2018'), desc: 'For being Sarcastic' },
    ];


}
