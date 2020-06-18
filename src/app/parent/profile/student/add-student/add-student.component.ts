import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {StudentServiceService} from '../../../_services/student/student-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Student} from '../.././../_models/student/student'


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @ViewChild("fileInput",{static:false}) fileInput:ElementRef

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

  constructor(private stdSrv: StudentServiceService, private rout:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ParentId =this.ar.snapshot.params['parentId'];
    console.log(this.ParentId)
  }

  createStudent()
  {
    var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
    var file=nativeElement.files[0];
    nativeElement.value="";
    let  student : Student=new Student(this.studentName, this.password, this.DateOfBirth, this.School, this.Education,
      this.DegreeOfLastYear)
    this.stdSrv.addStudent(student, file).subscribe(a => 
          this.rout.navigateByUrl("/Student/StudentProfile/" + a.parentId));
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
