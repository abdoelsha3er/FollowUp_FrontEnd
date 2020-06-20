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
  // teacher:TeacherModels=new TeacherModels(0,"","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),);
  teacher:TeacherModels=new TeacherModels(0,'','','','','',0,'','',new Date("01/07/1993").toLocaleDateString(),'');

  
teacherSchool:TeacherSchoolsModels;
add(teacherSchool){
  const form: FormData =new FormData();
  form.append("SchoolName",teacherSchool.SchoolName)
  form.append("TeacherId",teacherSchool.TeacherId);
  return this.http.post<any>(this.baseurl+"/AddTeacherSchool",form)
}

getall(TeacherId:number)
{
  return this.http.get<any>(this.baseurl+"/GetTeacherSchools/"+TeacherId);

}
delete(teacherSchoolId)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherSchool/"+teacherSchoolId)

}
  constructor(private http:HttpClient) { }
}
