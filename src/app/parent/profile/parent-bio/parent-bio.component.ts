import { Component, OnInit } from '@angular/core';
import {ParentModels} from '../../_models/parent-models';
import {ParentServicesService} from '../../_services/parent-services.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-parent-bio',
  templateUrl: './parent-bio.component.html',
  styleUrls: ['./parent-bio.component.css']
})
export class ParentBioComponent implements OnInit {



 Name:string;
 
  mobile:string;
  email:string;
  pass:string;
  pic:string;
  confiremPassordd:string;

  constructor(private paSrv: ParentServicesService,private rout:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    let parentId:number =this.ar.snapshot.params['parentId'];
    console.log(parentId)
    this.paSrv.DetailsParent(parentId).subscribe(a=>{this.Name = a.firstName+" "+
    a.lastName;this.email=a.email;this.mobile=a.phone;this.pic=a.picture;console.log(a)});


  }



}
