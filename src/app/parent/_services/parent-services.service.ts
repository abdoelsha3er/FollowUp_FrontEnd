import { Injectable } from '@angular/core';
import {ParentFile} from '../_models/parent-file'
import {ParentModels} from '../_models/parent-models'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ParentServicesService {

  url="http://localhost:6853/api/parent/";
  private headers: HttpHeaders;
  _parentFile:ParentFile;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

   }


  CreateParent(parent, photo):Observable<any>{
    // const formData: FormData = new FormData();
    // formData.append('avatar', file, file.name);
    // this._parentFile=new ParentModels(parent);
    const form : FormData = new FormData();
    form.append("FirstName",parent.FirstName);
    form.append("LastName",parent.LastName);
    form.append("UserName",parent.UserName);
    form.append("Password",parent.Password);
    form.append("Email",parent.Email);
    form.append("Phone", parent.Phone)
    // form.append("Picture",teacher.Picture);
    form.append("CityId",parent.CityId);
    form.append("Street",parent.Street);
    form.append("file",photo);
    return this.http.post<any>(this.url + 'AddParent', form)
  }

  DetailsParent(parentId)
  {
    return this.http.get<any>("http://localhost:6853/api/Parent/Details/" + parentId)
  }



}


