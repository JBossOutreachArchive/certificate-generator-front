import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Certificate } from '../services/certificate.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private gridApi;
  private studentname;

  columnDefs = [
        {headerName: 'Organization Name', field: 'name'},
        {headerName: 'Date', field: 'date' },
        {headerName: 'Certificate Description', field: 'desc'}
    ];

    rowData = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  	this.studentService.getCertificates().subscribe((certificates: Certificate[]) => {

      // add certificates in ag-grid
      for (const certificate of certificates){ 
        this.rowData.push({ name: certificate.issuing_organization.name, date: certificate.date, desc: certificate.issued_for });
        this.studentname = certificate.student.name;
      }
      this.gridApi.setRowData(this.rowData);
    });
  }
  onGridReady(event) {
    this.gridApi = event.api;
  }
}
