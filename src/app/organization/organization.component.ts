import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private service: OrganizationService) { }

  ngOnInit() {
    this.service.getCertificates().subscribe(
      (data: any[]) => {
        this.rowData = data.map(row => {
          var dateSplit: number[] = row.date.split("-").map(part => parseInt(part))

          return {
            name: row.student.name,
            date: new Date(dateSplit[0], dateSplit[1], dateSplit[2]),
            desc: row.issued_for
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
      {headerName: 'Student Name', field: 'name',checkboxSelection:true},
      {headerName: 'Date', field: 'date', sort: 'desc', cellRenderer: (date) => date.value.toLocaleDateString() },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData: any
  error: string
}
