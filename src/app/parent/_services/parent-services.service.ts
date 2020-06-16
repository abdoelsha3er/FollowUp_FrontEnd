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

  CreateParent(parent:ParentModels):Observable<ParentModels>{
    // const formData: FormData = new FormData();
    // formData.append('avatar', file, file.name);
    // this._parentFile=new ParentModels(parent);
    return this.http.post<ParentModels>(this.url + 'AddParent', {headers: this.headers})
  }


}
