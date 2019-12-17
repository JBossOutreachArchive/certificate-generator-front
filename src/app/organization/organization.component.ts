import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';
import { HttpEvent, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  private gridApi;
  constructor(private orgService: OrganizationService) { }

  title = 'app';
  columnDefs = [
      {headerName: 'Student Name', field: 'name', checkboxSelection: true},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [];

  uploadCSV(event) {
	    const csv = event.target.files[0];
	    if (csv.size > 5_242_880) {
	      alert(`CSV is larger than 5MBs.`);
	    } else {
      this.orgService.generateBulkCertificate(event.target.files[0]).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log('Uploaded!');
      }
    },
    error => {console.log("Error: "+error.message);});
  }
}

  ngOnInit() {
    this.orgService.getCertificates().subscribe((certificates: Certificate[]) => {
      for (const certificate of certificates){
        this.rowData.push({ name: certificate.student.name, date: certificate.date, desc: certificate.issued_for });
      }
    this.gridApi.setRowData(this.rowData);
    });
  }

  onGridReady(event) {
    this.gridApi = event.api;
  }
}
