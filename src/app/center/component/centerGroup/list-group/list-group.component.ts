import { Component, OnInit } from '@angular/core';
import { EductionalCenterGroup } from 'src/app/center/_models/eductional-center-group';
import { EductionalCenterGroupService } from 'src/app/center/_services/eductional-center-group.service';
import { CommentStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Center-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class CenterListGroupComponent implements OnInit {
  eductionalcentergroups:EductionalCenterGroup[]=[];
  // eductionalCenter:Eductional
  constructor(
    private eductionalcentergroupservice : EductionalCenterGroupService,
    private r:Router
  ) { }

  ngOnInit() {
    this.eductionalcentergroupservice.GetEductionalCenterGroups(1).subscribe(a=>{
      console.log("in list Group aaaaaa******----");
      console.log(a);
      this.eductionalcentergroups=a;
    })
  }

  // get details to route to it
  DeleteTeachergroup(eductionalCenterGroupId,indexs){
    // remove from html
    this.eductionalcentergroupservice.delete(eductionalCenterGroupId).subscribe(a=>{
      this.eductionalcentergroups.splice(indexs,1); // remove it from array products , but it deleted in api from services
    })
  }
  EditGroup(items,indexs){
    console.log("iteeeeeeeeeeems : ")
    console.log(items);
    this.r.navigateByUrl("/center/edit/group/"+items.eductionalCenterGroupId);
  }
  Details(items,i){
    this.r.navigateByUrl("center/details/group/"+items.eductionalCenterGroupId);
  }
  DeleteEductionalCenterGroup(eductionalCenterGroupId,indexs){
    this.eductionalcentergroupservice.delete(eductionalCenterGroupId).subscribe(a=>{
      this.eductionalcentergroups.splice(indexs,1)
    })
  }
}
