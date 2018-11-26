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
        {headerName: 'Date', field: 'date' },
        {headerName: 'Certificate Description', field: 'desc'},
        {headerName: 'Status', field: 'status'}
    ];

    rowData = [
        { name: 'Chandler', date: '10/10/2018', desc: 'For being Sarcastic', status: 'Issued' },
        { name: 'Joey', date: '10/10/2018', desc: 'For eating all the food', status: 'Pending' },
        { name: 'Phoebe', date: '10/10/2018', desc: 'For being the normal one', status: 'Issued' }
    ];

    
}
