import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../../../../../_services/student/student-service.service'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-bio',
  templateUrl: './student-bio.component.html',
  styleUrls: ['./student-bio.component.css']
})
export class StudentBioComponent implements OnInit {

  Name:string;
  Age:string;
  School:string;
  Grade:string;
  pic:string;
  parentId:number;
  studentId:number;

  constructor(private stdrev:StudentServiceService,private rout:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.parentId =this.ar.snapshot.params['ParentId'];
    this.studentId =this.ar.snapshot.params['StudentId'];
    console.log(this.parentId);
    this.getStudentDeatails();
    

  }
  getStudentDeatails()
  {
    
    this.stdrev.detailsStudentByid(this.parentId,this.studentId).subscribe(a=>{console.log(a);this.Name=a.studentName;
      this.pic=a.picture; this.Age=a.dateOfBirth.split("-")[2].split("T")[0] ; this.School=a.school;
      this.Grade=a.education

   });
  }


 

}
