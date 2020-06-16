import { Injectable } from '@angular/core';
import {ParentJoinGroup} from '../../_models/group/parent-join-group';

@Injectable({
  providedIn: 'root'
})
export class ParentJoinGroupService {
  GroupsTeacher : ParentJoinGroup[]=[
    new ParentJoinGroup('Ay7aga'),
    new ParentJoinGroup(' tany Ay7aga'),
    new ParentJoinGroup('talet Ay7aga'),
  ];
  getGroups(){
    return this.GroupsTeacher;
  }
  constructor() { }
}
