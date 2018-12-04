import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  uploadCSV(event) {
    const csv = event.target.files[0];
    if (csv.size > 5_242_880) {
      alert(`CSV larger than 5MB`);
    }
    if (csv.type !== 'text/csv' && csv.type !== 'application/vnd.ms-excel') {
      alert('Invalid file');
    }
  }

  constructor() { }

  ngOnInit() {
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
