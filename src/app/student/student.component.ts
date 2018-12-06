import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service"

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAllCertificates().subscribe(
      (data: any[]) => {
        this.rowData = data.map(row => {
          var dateSplit: number[] = row.date.split("-").map(part => parseInt(part))

          return {
            name: row.student.name,
            date: new Date(dateSplit[0], dateSplit[1], dateSplit[2]),
            desc: row.desc
          };
        });
      },
      error => {
        this.error = error.message;
      }
    );
  }

  title = 'app';

  columnDefs = [
      {headerName: 'Certificate Name', field: 'name'},
      {headerName: 'Date', field: 'date', sort: 'date', cellRenderer: (date) => date.value.toLocaleDateString()},
      {headerName: 'Certificate Description', field: 'desc'},
      {headerName: 'Valid Till', field: 'validdate'}
  ];

  rowData: any
  error: string

}
