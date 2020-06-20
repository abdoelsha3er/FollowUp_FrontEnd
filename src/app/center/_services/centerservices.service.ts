import { Injectable } from '@angular/core';
import { CenterModels } from '../_models/center-models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenterservicesService {

  private baseurl:string="http://localhost:6853/api/EductionalCenter"
  Center:CenterModels; 
  register(center, photo)
  {
    const form:FormData=new FormData();
    form.append("Name",center.name);
    form.append("UserName",center.userName);
    form.append("Email",center.email);
    form.append("Password",center.password);
    form.append("About",center.about);
    form.append("CityId",center.cityId);
    form.append("AddressDetails",center.addressDetails);
    form.append("file",photo);
    return this.http.post<any>(this.baseurl+"/AddEductionalCenter",form)
 } 
 getAllCenters(){
  return this.Center;
}

//Get by EductionalCenterById    //
GetEductionalCenterById(eductionalCenterId){
  console.log("id in serice is "+eductionalCenterId);
  return this.http.get<any>(this.baseurl+"/GetEductionalCenterById/"+eductionalCenterId)
}

//Edit 
EditEductionalCenter(center,eductionalCenterId ,photo)
  {
    const form:FormData=new FormData();
    form.append("Name",center.name);
    form.append("UserName",center.userName);
    form.append("Email",center.email);
    form.append("Password",center.password);
    form.append("About",center.about);
    form.append("CityId",center.cityId);
    form.append("AddressDetails",center.addressDetails);
    form.append("file",photo);
    return this.http.put<any>(this.baseurl+"/EditEductionalCenter/"+eductionalCenterId,form)
 }


  constructor(private http:HttpClient) { }
}
