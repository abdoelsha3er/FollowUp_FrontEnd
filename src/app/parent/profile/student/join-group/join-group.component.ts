import { Component, OnInit } from '@angular/core';
import {ParentJoinGroup} from '../../../_models/group/parent-join-group';
import {ParentJoinGroupService} from '../../../_services/group/parent-join-group.service';
@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.css']
})
export class JoinGroupComponent implements OnInit {
 parentTeacherGroup : ParentJoinGroup[] = [];
  constructor(private tchrSrv : ParentJoinGroupService) { }

  ngOnInit() {
    this.parentTeacherGroup = this.tchrSrv.getGroups();
  }

}
