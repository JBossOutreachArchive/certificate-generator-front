import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Certificate } from '../../services/certificate.model';

@Component({
  selector: 'app-certificates-listing',
  templateUrl: './certificates-listing.component.html',
  styleUrls: ['./certificates-listing.component.css']
})
export class CertificatesListingComponent implements OnInit {
  org: string;
  certificates: Certificate[] = [];
  constructor(private route: ActivatedRoute, private studService: StudentService ) { }

  ngOnInit() {
    this.org = this.route.snapshot.paramMap.get('org');
    this.studService.getAllCertificates().subscribe((data: Certificate[]) => {

      for (const certificate of data) {
        if ((certificate.issuing_organization as any).user.username == this.org ) {
          this.certificates.push(certificate);
        }
      }
    });
  }

}
