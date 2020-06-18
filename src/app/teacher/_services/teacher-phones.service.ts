import { Injectable } from '@angular/core';
import { TeacherPhonesModels } from '../_models/teacher-phones-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherPhonesService {
  private baseurl:string="http://localhost:6853/api/TeacherPhone"
  phone:TeacherPhonesModels;
  // add new phone to teacher
  add(teacherPhone){
    const form: FormData =new FormData();
  
    console.log("teacher Exprince in service : ");
    console.log(teacherPhone);
    form.append("TeacherPhoneNumber",teacherPhone.TeacherPhoneNumber);
    form.append("TeacherId",teacherPhone.TeacherId);
    return this.http.post<any>(this.baseurl+"/AddTeacherPhone",form)
  }
  // list phones
  getall(teacherId:number)
  {
    console.log("Teached id in service ");
    console.log(teacherId);
    return this.http.get<any>(this.baseurl+"/GetTeacherPhones/"+teacherId);
  }
  delete(teacherPhoneId)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherPhone/"+teacherPhoneId)

}
  constructor(private http:HttpClient) { }
}