import { Injectable } from '@angular/core';
import { TeacherModels } from '../_models/teacher-models'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
<<<<<<< HEAD
  private baseurl:string="http://localhost:6853/api/Teacher";

  teacher:TeacherModels;                        // form data >> accept fiiles uploaded
  register(teacher, photo){  // functiion  >> in comonent.ts>> call service.register(teacher).sube
=======

  teachers : TeacherModels[]=[
   
  ]
  private baseurl:string="http://localhost:6853/api/Teacher"
  teacher:TeacherModels;     // form data >> accept fiiles uploaded
  register(teacher){  // functiion  >> in comonent.ts>> call service.register(teacher).sube
>>>>>>> b980906718d39b96ac3955409687282a9ff08ea9
    console.log("teacher is ******** in service");
    console.log(teacher);
    const form : FormData = new FormData();
    form.append("FirstName",teacher.FirstName);
    form.append("LastName",teacher.LastName);
    form.append("UserName",teacher.UserName);
    form.append("Email",teacher.Email);
    form.append("Password",teacher.Password);
    form.append("Picture",teacher.Picture);
    form.append("CityId",teacher.CityId);
    form.append("AddressDetails",teacher.AddressDetails);
    form.append("Gender",teacher.Gender);
    form.append("DateOfBirth",teacher.DateOfBirth);
    form.append("About",teacher.About);
    return this.http.post<any>(this.baseurl+"/TeacherRegister",form)     // type Product
  }



  GetTeachers(){
    return this.http.get<any>(this.baseurl+"/GetTeachers");
  }
  constructor(private http:HttpClient) { }
}
