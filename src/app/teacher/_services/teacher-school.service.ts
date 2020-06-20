import { Injectable } from '@angular/core';
import { TeacherSchoolsModels } from '../_models/teacher-schools-models';
import { HttpClient } from '@angular/common/http';
import { scheduled } from 'rxjs';
import { TeacherModels } from '../_models/teacher-models';
import { ListTeacherSchoolComponent } from '../../teacher/componentes/teacherProfile/teacherSchool/list-teacher-school/list-teacher-school.component';

@Injectable({
  providedIn: 'root'
})
export class TeacherSchoolService {
  private baseurl:string="http://localhost:6853/api/TeacherSchool"
  school:TeacherSchoolsModels;
<<<<<<< HEAD
  // teacher:TeacherModels=new TeacherModels(0,"","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),);
  teacher:TeacherModels=new TeacherModels(0,'','','','','',0,'','',new Date("01/07/1993").toLocaleDateString(),'');
=======
  // teacher:TeacherModels=new TeacherModels("","","","","","",1,"","",new Date("01/07/1993").toLocaleDateString(),"");
>>>>>>> b7ac86eb9db56355ba1ed6a639d0652cc9ac1421

  
teacherSchool:TeacherSchoolsModels;
add(teacherSchool){
  const form: FormData =new FormData();
  form.append("SchoolName",teacherSchool.SchoolName)
  form.append("TeacherId",teacherSchool.TeacherId);
  return this.http.post<any>(this.baseurl+"/AddTeacherSchool",form)
}

// fuctiion for return new teacher added
addTeacherSchool(teacher:TeacherSchoolsModels){
  // this.listTeacherSchoolComponent.getNewTeacherSchools(teacher);
  console.log("Mostafa");
  console.log(teacher);
}
getall(TeacherId:number)
{
  return this.http.get<any>(this.baseurl+"/GetTeacherSchools/"+TeacherId);

}
delete(teacherSchoolId)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherSchool/"+teacherSchoolId)

}
  constructor(private http:HttpClient,
    /*private listTeacherSchoolComponent:ListTeacherSchoolComponent*/) { }
}
