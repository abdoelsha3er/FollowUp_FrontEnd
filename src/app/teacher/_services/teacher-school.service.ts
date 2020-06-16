import { Injectable } from '@angular/core';
import { TeacherSchoolsModels } from '../_models/teacher-schools-models';
import { HttpClient } from '@angular/common/http';
import { scheduled } from 'rxjs';
import { TeacherModels } from '../_models/teacher-models';

@Injectable({
  providedIn: 'root'
})
export class TeacherSchoolService {
  private baseurl:string="http://localhost:6853/api/TeacherSchool"
  school:TeacherSchoolsModels;
  teacher:TeacherModels=new TeacherModels("","","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),"");
 

addschool(school)
{
  const form: FormData =new FormData();
  form.append("TeacherId",school.TeacherId);
  form.append("SchoolName",school.SchoolName);
  return this.http.post<any>(this.baseurl+"/AddTeacherSchool",form)

}
getall(TeacherId:number)
{
  return this.http.get<any>(this.baseurl+"/GetTeacherSchools/"+TeacherId);

}
delete(school)
{
  return this.http.delete<any>(this.baseurl+"/DeleteTeacherSchool",school)

}
  constructor(private http:HttpClient) { }
}
