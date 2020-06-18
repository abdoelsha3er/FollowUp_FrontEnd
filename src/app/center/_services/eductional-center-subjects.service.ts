import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EductionalCenterSubjects } from '../_models/eductional-center-subjects';

@Injectable({
  providedIn: 'root'
})
export class EductionalCenterSubjectsService {
  eductionalCenterSubject:EductionalCenterSubjects;
  private baseurl:string="http://localhost:6853/api/EductionalCenterSubject";
  getall(eductionalCenterId:number)
{
  console.log("id teacher on service.ts");
  console.log(eductionalCenterId);
  return this.http.get<any>(this.baseurl+"/GetEductionalCenterSubjecsAssign/"+eductionalCenterId);
}
  // Add new
add(eductionalCenterSubject){
  const form: FormData =new FormData();
  console.log("eductionalCenterSubject in service : - ");
  console.log(eductionalCenterSubject);
  form.append("SubjectId",eductionalCenterSubject.subjectId);
  form.append("EductionalCenterId",eductionalCenterSubject.eductionalCenterId)
  return this.http.post<any>(this.baseurl+"/AddEductionalCenterSubject",form)
}

// Delete
delete(eductionalCenterSubject)
{
  return this.http.delete(this.baseurl+"/DeleteEductionalCenterSubject",eductionalCenterSubject);

}
  constructor(private http:HttpClient) { }
}
