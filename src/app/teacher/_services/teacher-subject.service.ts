import { Injectable } from '@angular/core';
import { TeacherSubjectModels } from '../_models/teacher-subject-models';
import { TeacherModels } from '../_models/teacher-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherSubjectService {
  private baseurl:string="http://localhost:6853/api/TeacherSubject"
  teachersubject:TeacherSubjectModels;
  // teacher:TeacherModels=new TeacherModels("","","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),"");
  teacher : TeacherModels = new TeacherModels(1,"Abdo","Elshaer","abdoelshaer1","abdo1@gmail.com","123",1,"Mahallet Zayaad","True",new Date("01/07/1993").toLocaleDateString(),"about abdo");

  // Get All

getall(teacherId:number)
{
  console.log("id teacher on service.ts");
  console.log(teacherId);
  return this.http.get<any>(this.baseurl+"/GetTeacherSubjectst/"+teacherId);
}
  // Add new
add(teachersubject){
  const form: FormData =new FormData();
  console.log("Teacher subject in service : - ");
  console.log(teachersubject);
  form.append("TeacherId",teachersubject.TeacherId)
  form.append("SubjectId",teachersubject.SubjectId);
  return this.http.post<any>(this.baseurl+"/AddTeacherSubject",form)
}

// Delete
delete(teacherSubject)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherSubject",teacherSubject)

}

  constructor(private http:HttpClient) { }
}
