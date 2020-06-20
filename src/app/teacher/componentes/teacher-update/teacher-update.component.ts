import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GovernmentService } from 'src/app/government/_service/government.service';
import { CityService } from 'src/app/city/_service/city.service';
import { TeacherService } from '../../_services/teacher.service';
import { Government } from 'src/app/government/_model/government';
import { City } from 'src/app/city/_model/city';
import { TeacherModels } from '../../_models/teacher-models';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {
  teacher : TeacherModels = new TeacherModels(1,"","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),"");
  allgovs :Government[] = [];
  allcitis:City[] = [];
  governate:number;
  id:number;
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef
  constructor(
    private route:ActivatedRoute,
    private r:Router,
    private teacherService:TeacherService,
    private govSrv:GovernmentService, 
    private citSrv:CityService 
  ) { }
// File choose
onUploadPhoto(){
  console.log(this.fileInput);
}
  ngOnInit() {
    this.govSrv.getAllGovermnts().subscribe(a=>{
      console.log(a);
      this.allgovs=a;
      this.route.params.subscribe(prams=>{
      this.id= parseInt(prams['id']);
      console.log("this.id"+this.id);
      this.teacherService.GetTeacherById(this.id).subscribe(a=>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
      console.log(a);
      this.teacher=a;
        })
      });
    });
  }
  selectCity(governmentId:number){                // get all Cities
    this.citSrv.getcitiesByid(governmentId).subscribe(a=>{
    this.allcitis = a
  });
}
onSaveChaneges(){
  var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
  var file=nativeElement.files[0];
  nativeElement.value="";
  this.teacherService.EditTeacherProfile(this.teacher,this.id,file).subscribe(a=>{
    this.r.navigateByUrl("/teacher/profile");
  });
}

}
