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
  error: String = '';

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

  onFileUpload(event){
    this.error = '';
    if(event.target.files[0].size > 5*1000){
        this.error = "File's too big!"
    }
  }

}
