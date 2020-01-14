import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Certificate } from '../services/certificate.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private studentName;
  private gridApi;
  private noCertificates;
  
  constructor(private studentService: StudentService) { }

  columnDefs = [
    {headerName: 'Organization Name', field: 'name'},
    {headerName: 'Date', field: 'date' },
    {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [];

  ngOnInit() {
    this.studentService.getAllCertificates().subscribe((certificates: Certificate[]) => {
      this.noCertificates = certificates.length === 0;

      if(certificates.length != 0){
        this.studentName = certificates[0].student.name;
        certificates.forEach(c => {
          this.rowData.push({
            name: c.issuing_organization.name, 
            date: c.date,
            desc: c.issued_for
          });
        });
        this.gridApi.setRowData(this.rowData);
      }
    })
  }

  onGridReady(event){
    this.gridApi = event.api;
  }

}
