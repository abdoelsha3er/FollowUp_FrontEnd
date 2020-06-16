import { Injectable } from '@angular/core';
import { CenterModels } from '../_models/center-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenterservicesService {

  private baseurl:string="http://localhost:6853/api/Center"
  Center:CenterModels; 
  register(center)
  {
    const form:FormData=new FormData();
    form.append("FirstName",center.FirstName);
    form.append("LastName",center.LastName);
    form.append("UserName",center.UserName);
    form.append("Email",center.Email);
    form.append("Password",center.Password);
    form.append("Picture",center.Picture);
    form.append("CityId",center.CityId);
    form.append("AddressDetails",center.AddressDetails);
    return this.http.post<any>(this.baseurl+"/CenterRegister",form)
 } 
 getAllCenters(){
  return this.Center;
}

  constructor(private http:HttpClient) { }
}
