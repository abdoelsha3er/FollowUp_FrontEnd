import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../_model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  url = "http://localhost:6853/api/Subject/" 

  constructor(private http:HttpClient) { }
  
  GetSubjectsByCategoryId(catid:number):Observable<Subject[]>{
    return this.http.get<Subject[]>(this.url+ "GetSubjectsByCategoryId/"+ catid);
  }
  }
  

//http://localhost:6853/api/Subject/GetSubjectsByCategoryId