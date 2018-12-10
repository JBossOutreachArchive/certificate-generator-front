import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Certificate } from '../services/certificate.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  certificates = [];
  organizations = {};
  constructor(private studService: StudentService) { }

  ngOnInit() {
    this.studService.getAllCertificates().subscribe((data: Certificate[]) => {

      for (const certificate of data) {
        // add certificate in list
        this.certificates.push(certificate);
        // add folders
        const name = certificate.issuing_organization.name;
        const username = (certificate.issuing_organization as any).user.username;

        if (name in this.organizations) {
          this.organizations[name].count += 1;
        } else {
          this.organizations[name] = { username: username, count: 1 };
          console.log(this.organizations);
        }

      }
    });
  }

}
