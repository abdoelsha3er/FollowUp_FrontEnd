import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Government } from 'src/app/government/_model/government';
import { City } from 'src/app/city/_model/city';
import { CenterModels } from '../../_models/center-models';
import { Router, ActivatedRoute } from '@angular/router';
import { CenterservicesService } from '../../_services/centerservices.service';
import { GovernmentService } from 'src/app/government/_service/government.service';
import { CityService } from 'src/app/city/_service/city.service';

@Component({
  selector: 'app-center-update',
  templateUrl: './center-update.component.html',
  styleUrls: ['./center-update.component.css']
})
export class CenterUpdateComponent implements OnInit {

  allgovs :Government[] = [];
  allcitis:City[] = [];
  center:CenterModels=new CenterModels(0,'Center 1 Cairo','centername1','centermail@gmail.com','123','','about center1',2,'mahalla');
  confiremPassordd:string;
  checkPass:boolean=true;
  governate:number;
  id:number;
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef
  
  constructor(
    private route:ActivatedRoute,
    private r:Router,
    private CenterservicesService:CenterservicesService,
    private govSrv:GovernmentService, 
    private citSrv:CityService ) { }

  ngOnInit() {
    this.govSrv.getAllGovermnts().subscribe(a=>{
      console.log(a);
      this.allgovs=a;
      this.route.params.subscribe(prams=>{
      this.id= parseInt(prams['id']);
      console.log("this.id"+this.id);
      this.CenterservicesService.GetEductionalCenterById(this.id).subscribe(a=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(a);
      this.center=a;
        })
      });
    });
    
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

onSaveChaneges(){
  var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
  var file=nativeElement.files[0];
  nativeElement.value="";
  this.CenterservicesService.EditEductionalCenter(this.center,this.id,file).subscribe(a=>{
    this.r.navigateByUrl("/center/profile");
  });
}
}
