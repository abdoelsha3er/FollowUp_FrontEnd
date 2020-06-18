import { Component, OnInit } from '@angular/core';
import { EductionalCenterGroup } from 'src/app/center/_models/eductional-center-group';
import { ActivatedRoute, Router } from '@angular/router';
import { EductionalCenterGroupService } from 'src/app/center/_services/eductional-center-group.service';

@Component({
  selector: 'app-Center-details-group',
  templateUrl: './details-group.component.html',
  styleUrls: ['./details-group.component.css']
})
export class CenterDetailsGroupComponent implements OnInit {
  id:number;
  sname:string;
  eductionalCenterGroup:EductionalCenterGroup;   //=new EductionalCenterGroup(0,'',0,0,0,0,'','',0,'','',0,'','');
  obj={a:1,name:"Abdo"};
  constructor(
    private eductionalCenterGroupService:EductionalCenterGroupService,
    private r: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id= parseInt(this.route.snapshot.params['id']); // snapshot see route and id= /edit/:id
    this.route.params.subscribe(prams=>{
      this.id= parseInt(prams['id']);
    });
    // after get id
    this.eductionalCenterGroupService.GetEductionalCenterGroupById(this.id).subscribe(a=>{
      this.eductionalCenterGroup=a;
      console.log("Sleetc *****************");
      console.log(this.eductionalCenterGroup);
    })
  }

}
