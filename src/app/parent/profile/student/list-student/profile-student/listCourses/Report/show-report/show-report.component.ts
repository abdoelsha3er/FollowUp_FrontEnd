import { Component, OnInit } from '@angular/core';
import {StudentReportGroup} from '../../../../../../../_models/student-report-group';
import {StudentReportGroupService} from '../../../../../../../_services/studentReportGroup/student-report-group.service';
@Component({
  selector: 'app-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.css']
})
export class ShowReportComponent implements OnInit {

 
  studentreportgroup:StudentReportGroup;
  constructor(private srg:StudentReportGroupService) { }

  ngOnInit() {
    this.studentreportgroup =this.srg.getStudentReportgroup();
  }

}
