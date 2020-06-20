import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategorySubject } from '../_model/category-subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorySubjectService {

  url="http://localhost:6853/api/CategorySubject";
  constructor(private http: HttpClient) { }
  
  GetAllCategories():Observable<CategorySubject[]>{
    return this.http.get<CategorySubject[]>(this.url);
    }
  }