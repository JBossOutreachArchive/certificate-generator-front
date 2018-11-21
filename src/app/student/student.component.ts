import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service"
import { Observable } from 'rxjs';

class Cert{
  issuer:string;
  date:string;
  name:string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  columns: string[];
  certs: Cert[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAllCertificates()
    .subscribe((data: Cert[])=>{
      data = data.sort((a,b)=>{
        return new Date(b.date).getTime() - new Date(a.date).getTime() 
      })
      console.log(data)
      this.certs = data
    })
    this.columns = ["Name","Issuer","Date"]
  }

}
