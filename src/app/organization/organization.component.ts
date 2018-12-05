import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  private gridApi;

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
  this.organizationService.getAllCertificates().subscribe((certificates: Certificate[]) => {
       // add certificates in ag-grid
      for(let certificate of certificates){
        this.rowData.push({ name: certificate.name, date: certificate.date, desc: certificate.desc });
      }
      this.gridApi.setRowData(this.rowData);
    })
  }

  onGridReady(event){
    this.gridApi = event.api;
  }

  title = 'app';

  columnDefs = [
      {headerName: 'Student Name', field: 'name',checkboxSelection:true},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [];


}
