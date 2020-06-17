import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ParentModels} from '../_models/parent-models'
import{ParentServicesService} from '../_services/parent-services.service'
import { Government } from 'src/app/government/_model/government';
import { City } from 'src/app/city/_model/city';
import { CityService } from 'src/app/city/_service/city.service';
import { GovernmentService } from 'src/app/government/_service/government.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @ViewChild("fileInput",{static:false}) fileInput:ElementRef
  
  // File choose
  onUploadPhoto(){
    
    console.log(this.fileInput);
  
  }

  allgovs :Government[] = [];
  allcitis:City[] = [];


  firstname:string ;
  lastname:string;
  username:string;
  mobile:string;
  governate:number;
  city:number;
  street:string;
  email:string;
  pass:string;
  pic:string;
  confiremPassordd:string;
  checkPass:boolean=true
  

  constructor(private parSrv : ParentServicesService, private govSrv:GovernmentService, 
    private citSrv:CityService, private r:Router) {}

 

  ngOnInit() {
   this.govSrv.getAllGovermnts().subscribe( a =>this.allgovs = a)
   this.citSrv.getAllCities().subscribe(c => this.allcitis = c)
  }
 




  selectCity(governmentIId:number){
    this.citSrv.getcitiesByid(governmentIId).subscribe(a=> this.allcitis = a);
  }
   

  



  checkPassWithConfirm()
  {
    console.log('.........................')
    if(this.pass == this.confiremPassordd)
    
       this.checkPass=true;
    else
    {
    this.checkPass=false
    console.log('.................6666666666666........')
    }
  }



 
  addParent()
  {

    var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
    var file=nativeElement.files[0];
    nativeElement.value="";
    let  parent : ParentModels=new ParentModels(this.firstname, this.lastname, this.username, this.pass, this.email, this.mobile,
   this.city, this.street);
    this.parSrv.CreateParent(parent, file).subscribe(a => 
          this.r.navigateByUrl("/Parent/ParentProfile/" + a.parentId)); 
  }
  
  

}


// onSave(){
//   var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
//   var file=nativeElement.files[0];
//   nativeElement.value="";
//   console.log("Newwwwwwwwwwwwwwwww Teacher is ............... ");
//   console.log(this.teacher);
//   this.teacherservice.register(this.teacher, file).subscribe(a=>{
//     this.r.navigateByUrl("/teacher/profile");
//   })
// }

