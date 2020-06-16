import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../_model/city';


@Injectable({
  providedIn: 'root'
})
export class CityService {

url = "http://localhost:6853/api/City/" 

constructor(private http:HttpClient) { }
getAllCities():Observable<City[]>{
  return this.http.get<City[]>(this.url+"GetCity");
}

getcitiesByid(id:number):Observable<City[]>{
  return this.http.get<City[]>(this.url+"GetCityId/"+id);
}
}
