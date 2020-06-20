import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Government } from 'src/app/government/_model/government';
import { City } from 'src/app/city/_model/city';
import { CenterModels } from '../../_models/center-models';
import { Router } from '@angular/router';
import { CenterservicesService } from '../../_services/centerservices.service';
import { GovernmentService } from 'src/app/government/_service/government.service';
import { CityService } from 'src/app/city/_service/city.service';

@Component({
  selector: 'app-center-register',
  templateUrl: './center-register.component.html',
  styleUrls: ['./center-register.component.css']
})
export class CenterRegisterComponent implements OnInit {
  allgovs :Government[] = [];
  allcitis:City[] = [];
  center:CenterModels=new CenterModels(0,'Center 1 Cairo','centername1','centermail@gmail.com','123','','about center1',2,'mahalla');
  confiremPassordd:string;
  checkPass:boolean=true;
  governate:number;
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef

  constructor(private r:Router,
    private CenterservicesService:CenterservicesService,
    private govSrv:GovernmentService, 
    private citSrv:CityService ) { }

  ngOnInit() {
<<<<<<< HEAD
    this.govSrv.getAllGovermnts().subscribe(a=>{
      console.log(a);
      this.allgovs=a;
    })
=======
    this.govSrv.getAllGovermnts().subscribe(a=>this.allgovs=a)
    // this.citSrv.getAllCities().subscribe(c => this.allcitis = c)
>>>>>>> b7ac86eb9db56355ba1ed6a639d0652cc9ac1421
  }

  selectCity(governmentIId:number){
    this.citSrv.getcitiesByid(governmentIId).subscribe(a=>{
      console.log("Cities");
      console.log(a);
      this.allcitis = a;
    });
  }

  // File choose
  onUploadPhoto(){
    console.log(this.fileInput);
  }

  checkPassWithConfirm()
  {
    console.log('.........................')
    if(this.center.password== this.confiremPassordd)
    
       this.checkPass=true;
    else
    {
    this.checkPass=false
    console.log('.................6666666666666........')
    }
    
  }
  
  onSave(){
    var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
    var file=nativeElement.files[0];
    nativeElement.value="";
    this.CenterservicesService.register(this.center,file).subscribe(a=>{
      console.log("aaaaaaaaa of center");
      console.log(a);
      this.r.navigateByUrl("/center/profile");
    })
  }

}
