import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service"

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  mode:string;
  columns: any[];
  certs: any[];
  constructor(private studentService: StudentService) { }

  switchDisplayMode(){
    console.log(this.mode)
    if(this.mode==="list"){
      this.mode="thumbnail"
    }else{
      this.mode="list"
    }
  }
  ngOnInit() {
    this.mode="list"
    this.studentService.getAllCertificates()
    .subscribe((data: any[])=>{
      data = data.sort((a,b)=>{
        return new Date(b.date).getTime() - new Date(a.date).getTime() 
      })
      console.log(data)
      this.certs = data
    })
    this.columns = [
      {headerName: 'Certificate Name', field: 'name'},
      {headerName: 'Issued Date', field: 'date',sort:"desc" ,comparator:(a,b)=>{
        return new Date(a).getTime() - new Date(b).getTime()
      }},
      {headerName: 'Issuing organization', field: 'issuer'}
    ]
  }

}
