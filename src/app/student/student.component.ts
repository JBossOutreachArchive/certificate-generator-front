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

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  this.studentService.getAllCertificates().subscribe((certificates: Certificate[]) => {
       // add certificates in ag-grid
      for(let certificate of certificates){
        this.rowData.push({ name: certificate.name, date: certificate.date, desc: certificate.desc, validdate: certificate.val });
      }
      this.gridApi.setRowData(this.rowData);
    })
  }

  onGridReady(event){
    this.gridApi = event.api;
  }

  columnDefs = [
      {headerName: 'Certificate Name', field: 'name'},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'},
      {headerName: 'Valid Till', field: 'validdate'}
  ];
  rowData = [];

}
