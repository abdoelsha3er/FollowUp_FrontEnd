import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeacherModels } from '../../_models/teacher-models';
import { Router } from '@angular/router';
import { TeacherService } from '../../_services/teacher.service';
import { GovernmentService } from 'src/app/government/_service/government.service';
import { CityService } from 'src/app/city/_service/city.service';
import { Government } from 'src/app/government/_model/government';
import { City } from 'src/app/city/_model/city';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {
  // teacher:TeacherModels=new TeacherModels(1,"","","","","","",1,"","",new Date("01/07/1993").toLocaleDateString());
  teacher : TeacherModels = new TeacherModels(1,"Abdo","Elshaer","abdoelshaer1","abdo1@gmail.com","123",1,"Mahallet Zayaad","True",new Date("01/07/1993").toLocaleDateString(),"Add Your Bio?!");
  confiremPassordd:string;
  checkPass:boolean=true;
  allgovs :Government[] = [];
  allcitis:City[] = [];
  governate:number;
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef

// File choose
onUploadPhoto(){
  
  console.log(this.fileInput);

}

  constructor(
    private r:Router,
    private teacherservice:TeacherService,    // ngModel
    private govSrv:GovernmentService, 
    private citSrv:CityService
  ) { }
  
  onSave(){
    var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
    var file=nativeElement.files[0];
    nativeElement.value="";
    console.log("Newwwwwwwwwwwwwwwww Teacher is ......... in commponent.ts...... ");
    console.log(this.teacher);
    this.teacherservice.register(this.teacher, file).subscribe(a=>{
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
    this.govSrv.getAllGovermnts().subscribe(a=>{   // get all Govenments
      this.allgovs=a
    })
  }
  selectCity(governmentId:number){                // get all Cities
      this.citSrv.getcitiesByid(governmentId).subscribe(a=>{
      this.allcitis = a
    });
  }

}
