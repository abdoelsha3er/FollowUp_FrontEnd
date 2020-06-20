import { Injectable } from '@angular/core';
import { TeacherModels } from '../_models/teacher-models'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseurl:string="http://localhost:6853/api/Teacher";

  teacher:TeacherModels;                        // form data >> accept fiiles uploaded
  register(teacher, photo){  // functiion  >> in comonent.ts>> call service.register(teacher).sube
    console.log("teacher is ******** in service");
    console.log(teacher);
    const form : FormData = new FormData();
    form.append("FirstName",teacher.firstName);
    form.append("LastName",teacher.lastName);
    form.append("UserName",teacher.userName);
    form.append("Email",teacher.email);
    form.append("Password",teacher.password);
    form.append("CityId",teacher.cityId);
    form.append("AddressDetails",teacher.addressDetails);
    form.append("Gender",teacher.gender);
    form.append("DateOfBirth",teacher.dateOfBirth);
    form.append("About",teacher.about);
    form.append("file",photo);
    return this.http.post<any>(this.baseurl+"/TeacherRegister",form)     // type Product
  }

  //Get by TeacherById    //
  GetTeacherById(teacherId){
    return this.http.get<any>(this.baseurl+"/GetTeacherById/"+teacherId)
  }

  GetTeachers(){
    return this.http.get<any>(this.baseurl+"/GetTeachers");
  }

  //teacher:TeacherModels;                        // form data >> accept fiiles uploaded
  EditTeacherProfile(teacher, teacherId, photo){  // functiion  >> in comonent.ts>> call service.register(teacher).sube
    const form : FormData = new FormData();
    form.append("FirstName",teacher.firstName);
    form.append("LastName",teacher.lastName);
    form.append("UserName",teacher.userName);
    form.append("Email",teacher.email);
    form.append("Password",teacher.password);
    form.append("CityId",teacher.cityId);
    form.append("AddressDetails",teacher.addressDetails);
    form.append("Gender",teacher.gender);
    form.append("DateOfBirth",teacher.dateOfBirth);
    form.append("About",teacher.about);
    form.append("file",photo);
    return this.http.put<any>(this.baseurl+"/EditTeacherProfile/"+teacherId,form)     // type Product
  }

  constructor(private http:HttpClient) { }
}
