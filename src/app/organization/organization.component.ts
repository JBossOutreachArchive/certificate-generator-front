import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  fileCSV(){
    var csvSize = document.getElementById("csvupload").files[0];
    if (csvSize.size > 5*1048576) // 5mb in bytes. 1 MB = 1048576 Bytes
    {
      alert("The File size should be less than 5MB!"); //Error Alert
    }
    else {
      alert("File uploaded successfully!"); //Success Alert
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
