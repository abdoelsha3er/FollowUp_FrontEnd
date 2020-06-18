import { Injectable } from '@angular/core';
import { Student } from '../../_models/student/student'
import {Observable} from 'rxjs'
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  students : Student[]=[]
   url:string="http://localhost:6853/api/Student/"

   
  

  getAllStudents(id:number){
    return this.http.get<any>(this.url+"Students/" + id);
  }
  constructor(private http : HttpClient) { }


addStudent(student, photo):Observable<any>
{
  const form : FormData = new FormData();
  form.append("StudentName",student.StudentName);
  form.append("Password",student.Password);
  form.append("DateOfBirth",student.DateOfBirth);
  form.append("Password",student.Password);
  form.append("School",student.School);
  form.append("Education", student.Education)
  // form.append("Picture",teacher.Picture);
  form.append("DegreeOfLastYear",student.DegreeOfLastYear);
  form.append("ParentId",student.ParentId);
  form.append("file",photo);
  return this.http.post<any>(this.url + 'AddStudent', form)
}

detailsStudentByid(parentId:number,studentId:Number)
{
   return this.http.get<any>(this.url+'Details/'+parentId+'/'+studentId)
}

updateStudent(student:Student,ParentId:number, StudentId:number):Observable<any>
{
  
  return this.http.put<any>(this.url +'EditStudent/'+ ParentId+ '/' + StudentId, student)
  
}

}



