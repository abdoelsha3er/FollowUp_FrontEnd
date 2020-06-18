import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EductionalCenterGroupService {
  private baseurl:string="http://localhost:6853/api/EductionalCenterGroup";
  add(eductionalCenterGroup){
    console.log("eductionalCenterGroup is ******** in service");
    console.log(eductionalCenterGroup);
    const form : FormData = new FormData();
    form.append("Name",eductionalCenterGroup.name);
    form.append("EductionalCenterId",eductionalCenterGroup.eductionalCenterId);
    form.append("TeacherId",eductionalCenterGroup.teacherId);
    form.append("SubjectId",eductionalCenterGroup.subjectId);
    form.append("GradeId",eductionalCenterGroup.gradeId);
    form.append("Description",eductionalCenterGroup.description);
    form.append("Logo",eductionalCenterGroup.logo);
    form.append("TotleStudents",eductionalCenterGroup.totleStudents);
    form.append("DateFrom",eductionalCenterGroup.dateFrom);
    form.append("DateTo",eductionalCenterGroup.dateTo);
    form.append("PriceInMonth",eductionalCenterGroup.priceInMonth);
    form.append("PriceInMonth",eductionalCenterGroup.status);
    form.append("PriceInMonth",eductionalCenterGroup.priceInMonth);
    return this.http.post<any>(this.baseurl+"/AddEductionalCenterGroup",form)     // type Product
  }
// get by EductionalCenterId
  GetEductionalCenterGroups(eductionalCenterId){
    return this.http.get<any>(this.baseurl+"/GetEductionalCenterGroups/"+eductionalCenterId)
  }
//Get by EductionalCenterGroupById
  GetEductionalCenterGroupById(eductionalCenterGroupId){
    return this.http.get<any>(this.baseurl+"/GetEductionalCenterGroupById/"+eductionalCenterGroupId)
  }

  delete(eductionalCenterGroupId)
{
  return this.http.delete(this.baseurl+"/DeleteEductionalCenterGroup/"+eductionalCenterGroupId)

}
  constructor(private http:HttpClient) { }
}
