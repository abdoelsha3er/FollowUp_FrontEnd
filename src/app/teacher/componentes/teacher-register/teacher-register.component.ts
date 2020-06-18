import { Component, OnInit } from '@angular/core';
import { TeacherModels } from '../../_models/teacher-models';
import { Router } from '@angular/router';
import { TeacherService } from '../../_services/teacher.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {
  teacher:TeacherModels=new TeacherModels("","","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),"");
  confiremPassordd:string;
  checkPass:boolean=true;

  constructor(
    private r:Router,
    private teacherservice:TeacherService    // ngModel
  ) { }
  
   // Register New Teacher
   onSave(){
    console.log("Newwwwwwwwwwwwwwwww Teacher is ............... ");
    console.log(this.teacher);
    this.teacherservice.register(this.teacher).subscribe(a=>{
      this.r.navigateByUrl("/teacher/profile");
    })
  }
  checkPassWithConfirm()
  {
    console.log('.........................')
    if(this.teacher.password== this.confiremPassordd)
    
       this.checkPass=true;
    else
    {
    this.checkPass=false
    console.log('.................6666666666666........')
    }
  }


  ngOnInit() {
  }

}
