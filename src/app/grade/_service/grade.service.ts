import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../_model/grade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  url="http://localhost:6853/api/Grade/GetGrades";
  constructor(private http: HttpClient) { }
  
  GetGrades():Observable<Grade[]>{
    return this.http.get<Grade[]>(this.url);
    }
}
