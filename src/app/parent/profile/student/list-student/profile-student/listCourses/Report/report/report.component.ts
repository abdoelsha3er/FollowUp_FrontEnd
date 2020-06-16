import { Component, OnInit } from '@angular/core';
import { ReportModels} from '../../../../../../../../report/_models/report-models'
import { ReportServicesService } from '../../../../../../../../report/_services/report-services.service'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports : ReportModels [] = []
  constructor(private rptSrv:ReportServicesService) { }

  ngOnInit() {
    this.reports = this.rptSrv.getAllReports();
  }

}
