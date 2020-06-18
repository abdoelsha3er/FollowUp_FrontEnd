import { Injectable } from '@angular/core';
import { TeacherLinksModels } from '../_models/teacher-links-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherLinksService {
  private baseurl:string="http://localhost:6853/api/TeacherSocialLink"
  links:TeacherLinksModels;
  
  add(teacherSocialLink){
    const form: FormData =new FormData();
  
    console.log("teacher links in service : ");
    console.log(teacherSocialLink);
    form.append("LinkAddess",teacherSocialLink.LinkAddess);
    form.append("TeacherId",teacherSocialLink.TeacherId);
    return this.http.post<any>(this.baseurl+"/AddTeacherSocialLink",form)
  }
  delete(teacherSocialLinkId)
{
  return this.http.delete(this.baseurl+"/DeleteTeacherSocialLink/"+teacherSocialLinkId)

}


  constructor(private http:HttpClient) { }
}
