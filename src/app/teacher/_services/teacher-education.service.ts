import { Injectable } from '@angular/core';
import { TeacherEducationModels } from '../_models/teacher-education-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherEducationService {
  private baseurl:string="http://localhost:6853/api/TeacherEduction"
  education:TeacherEducationModels;

  
  
// teacherEducation:TeacherEducationModels;
debugger;
add(teacherEducation){
  const form: FormData =new FormData();
  this.debugger;
  console.log("teacherEducation in service : ");
  console.log(teacherEducation);
  form.append("EductionName",teacherEducation.EductionName);
  form.append("TeacherId",teacherEducation.TeacherId);
  return this.http.post<any>(this.baseurl+"/AddTeacherEduction",form)
}
getall(teacherId:number)
{
  console.log("Teached id in service ");
  console.log(teacherId);
  return this.http.get<any>(this.baseurl+"/GetTeacherEductions/"+teacherId);

}
delete(teacherEductionId)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherEduction/"+teacherEductionId)
}
  constructor(private http:HttpClient) { }
}
