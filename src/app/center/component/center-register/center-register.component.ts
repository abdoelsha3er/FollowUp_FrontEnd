import { Component, OnInit } from '@angular/core';
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
  center:CenterModels=new CenterModels("","","","","","","",1,"");
  confiremPassordd:string;
  checkPass:boolean=true;
  governate:number;

  
  constructor(private r:Router,
    private CenterservicesService:CenterservicesService,
    private govSrv:GovernmentService, 
    private citSrv:CityService ) { }

  ngOnInit() {
    this.govSrv.getAllGovermnts().subscribe(a=>this.allgovs=a)
    this.citSrv.getAllCities().subscribe(c => this.allcitis = c)
  }

  selectCity(governmentIId:number){
    this.citSrv.getcitiesByid(governmentIId).subscribe(a=> this.allcitis = a);
  }

  checkPassWithConfirm()
  {
    console.log('.........................')
    if(this.center.Password== this.confiremPassordd)
    
       this.checkPass=true;
    else
    {
    this.checkPass=false
    console.log('.................6666666666666........')
    }
  }
  onSave(){
    this.CenterservicesService.register(this.center).subscribe(a=>{
      this.r.navigateByUrl("/center/profile");
    })
  }

}
