import { Injectable } from '@angular/core';
import {StudentReportGroup} from '../../_models/student-report-group';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentReportGroupService {
  studentreportgroup=new StudentReportGroup("kkk");
  getStudentReportgroup(){
    return this.studentreportgroup;
  }
  constructor() { }
}
