import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  columnDefs = [
      {headerName: 'Student Name', field: 'name', checkboxSelection: true},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  title = 'app';
  error: String = '';
  message: String = '';
  percentage = 0;
  rowData = [];
  gridApi;
 
  constructor(private orgService: OrganizationService) { }

  ngOnInit() {
    this.getCertificates();
  }
  
  onFileUpload(event){
    this.error = '';
    if(event.target.files[0].size > 5*1000){
        this.error = "File's too big!";
    }
    this.orgService.generateBulkCertificate(event.target.files[0]).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentage = Math.round(100 * event.loaded / event.total);
        const progress_bar = document.getElementById('progress-bar');
        progress_bar.style.width = this.percentage+"%";
      } else if (event instanceof HttpResponse) {
        this.percentage = 0;
        this.message = "File uploaded successfuly";
        this.getCertificates();
      }
    },
    error => this.error = error);
  }


  getCertificates(){
    this.orgService.getCertificates().subscribe((certificates: Certificate[]) => {
      // add certificates in ag-grid
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
