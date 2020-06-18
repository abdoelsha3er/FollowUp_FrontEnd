import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Government } from '../_model/government';

@Injectable({
  providedIn: 'root'
})
export class GovernmentService { 
url="http://localhost:6853/api/Government/GetGovernments";
constructor(private http: HttpClient) { }

getAllGovermnts():Observable<Government[]>{
  return this.http.get<Government[]>(this.url);
  }
}