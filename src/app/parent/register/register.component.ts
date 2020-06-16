import { Component, OnInit } from '@angular/core';
import {ParentModels} from '../_models/parent-models'
import{ParentServicesService} from '../_services/parent-services.service'
import { Government } from 'src/app/government/_model/government';
import { City } from 'src/app/city/_model/city';
import { CityService } from 'src/app/city/_service/city.service';
import { GovernmentService } from 'src/app/government/_service/government.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



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
    private citSrv:CityService) { }

 

  ngOnInit() {
   this.govSrv.getAllGovermnts().subscribe( a => this.allgovs = a)
   this.citSrv.getAllCities().subscribe(c => this.allcitis = c)
  }
 




  selectCity(governmentIId:number){
    this.citSrv.getcitiesByid(governmentIId).subscribe(a=> this.allcitis = a);
  }
   

  

  addParent()
  {
 let  parent : ParentModels=new ParentModels(this.firstname, this.lastname, this.username, this.pass, this.email, this.mobile, this.pic,
   this.city, this.street);
    this.parSrv.CreateParent(parent).subscribe(a => console.log(a)); 
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


}


//alert("Parent Added")

