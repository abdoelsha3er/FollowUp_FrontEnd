import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from '../../../_services/student/student-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Student} from '../../../_models/student/student'


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  parentId:number
  studentId:number

  studentName:string;
  password:string;  
   DateOfBirth:Date
  School:String
   Education:String
    DegreeOfLastYear:Number
     ParentId:Number
    
  confiremPassordd:string;
  checkPass:boolean=true

Skills:string
 
  constructor(private stdSrv:StudentServiceService, private rout:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.parentId =this.ar.snapshot.params['ParentId'];
    this.studentId =this.ar.snapshot.params['StudentId'];
    this.stdSrv.detailsStudentByid(this.parentId,this.studentId).subscribe(s =>{this.studentName = s.studentName;
      this.password=s.password; this.DateOfBirth=s.dateOfBirth; this.School=s.school; this.Education=s.education;
      this.DegreeOfLastYear=s.degreeOfLastYear; console.log(s)});
  }

  updatestudents()
  {
    console.log(this.parentId);
    console.log(this.studentId);
   let student:Student = new Student(this.studentName, this.password, this.DateOfBirth, this.School,
    this.Education, this.DegreeOfLastYear);
    this.stdSrv.updateStudent(student, this.parentId, this.studentId).subscribe(s =>{this.studentName = s.studentName;
      this.password=s.password; this.DateOfBirth=s.dateOfBirth; this.School=s.school; this.Education=s.education;
      this.DegreeOfLastYear=s.degreeOfLastYear; console.log(s)});
      // this.rout.navigateByUrl("/Student/StudentProfile/" + s.parentId); 
      
  }

  checkPassWithConfirm()
  {
    console.log('.........................')
    if(this.password == this.confiremPassordd)
    
       this.checkPass=true;
    else
    {
    this.checkPass=false
    console.log('.................6666666666666........')
    }
  }

}
