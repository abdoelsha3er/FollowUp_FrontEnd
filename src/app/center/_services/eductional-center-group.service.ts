import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EductionalCenterGroupService {
  private baseurl:string="http://localhost:6853/api/EductionalCenterGroup";
  add(eductionalCenterGroup,photo){
    console.log("eductionalCenterGroup is ******** in service");
    console.log(eductionalCenterGroup);
    const form : FormData = new FormData();
    form.append("Name",eductionalCenterGroup.name);
    form.append("EductionalCenterId",eductionalCenterGroup.eductionalCenterId);
    form.append("TeacherId",eductionalCenterGroup.teacherId);
    form.append("SubjectId",eductionalCenterGroup.subjectId);
    form.append("GradeId",eductionalCenterGroup.gradeId);
    form.append("Description",eductionalCenterGroup.description);
    form.append("TotleStudents",eductionalCenterGroup.totleStudents);
    form.append("DateFrom",eductionalCenterGroup.dateFrom);
    form.append("DateTo",eductionalCenterGroup.dateTo);
    form.append("PriceInMonth",eductionalCenterGroup.priceInMonth);
    form.append("PriceInMonth",eductionalCenterGroup.status);
    form.append("PriceInMonth",eductionalCenterGroup.priceInMonth);
    form.append("file",photo);
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
  console.log("id deleted in serice")
  return this.http.delete(this.baseurl+"/DeleteEductionalCenterGroup/"+eductionalCenterGroupId)
}


// Edit
Edit(eductionalCenterGroup,eductionalCenterGroupId,photo){
  const form : FormData = new FormData();
  form.append("Name",eductionalCenterGroup.name);
  form.append("EductionalCenterId",eductionalCenterGroup.eductionalCenterId);
  form.append("TeacherId",eductionalCenterGroup.teacherId);
  form.append("SubjectId",eductionalCenterGroup.subjectId);
  form.append("GradeId",eductionalCenterGroup.gradeId);
  form.append("Description",eductionalCenterGroup.description);
  form.append("TotleStudents",eductionalCenterGroup.totleStudents);
  form.append("DateFrom",eductionalCenterGroup.dateFrom);
  form.append("DateTo",eductionalCenterGroup.dateTo);
  form.append("PriceInMonth",eductionalCenterGroup.priceInMonth);
  form.append("PriceInMonth",eductionalCenterGroup.status);
  form.append("PriceInMonth",eductionalCenterGroup.priceInMonth);
  form.append("file",photo);
  return this.http.put<any>(this.baseurl+"/EditEductionalCenterGroup/"+eductionalCenterGroupId,form)     // type Product
}


  constructor(private http:HttpClient) { }
}

