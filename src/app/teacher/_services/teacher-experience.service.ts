import { Injectable } from '@angular/core';
import { TeacherExperienceModels } from '../_models/teacher-experience-models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeacherExperienceService {
  private baseurl:string="http://localhost:6853/api/TeacherExperience"
  exprince:TeacherExperienceModels;

  add(teacherExprince){
    const form: FormData =new FormData();
  
    console.log("teacher Exprince in service : ");
    console.log(teacherExprince);
    form.append("Description",teacherExprince.Description);
    form.append("StartDate",teacherExprince.StartDate);
    form.append("EndDate",teacherExprince.EndDate);
    form.append("TeacherId",teacherExprince.TeacherId);
    return this.http.post<any>(this.baseurl+"/AddTeacherExperience",form)
  }
  getall(teacherId:number)
{
  console.log("Teached id in service ");
  console.log(teacherId);
  return this.http.get<any>(this.baseurl+"/GetTeacherExperience/"+teacherId);

}
delete(teacherExperienceId)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherExperience/"+teacherExperienceId)

}
 
 constructor(private http:HttpClient) { }
}
