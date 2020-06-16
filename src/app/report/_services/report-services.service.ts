import { Injectable } from '@angular/core';
import {ReportModels } from '../_models/report-models'
import {formatDate} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {
  reports : ReportModels[]=[
    new ReportModels(formatDate(new Date(), '2020-1-1', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-2', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-3', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-4', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-1', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-2', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-3', 'en')),
    new ReportModels(formatDate(new Date(), '2020-1-4', 'en')),
   
  ]

  getAllReports(){
    return this.reports;
  }

  constructor() { }
}
