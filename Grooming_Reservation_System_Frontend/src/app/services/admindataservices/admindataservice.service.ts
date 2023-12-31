import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataserviceService } from '../userdataservices/userdataservice.service';
import { User } from 'src/app/dao/user';
import { Appointment } from 'src/app/dao/appointment';
import { Salon } from 'src/app/dao/salon';

@Injectable({
  providedIn: 'root'
})
export class AdmindataserviceService {
  
  url = this.dataservice.url;

  constructor(private http: HttpClient, private dataservice: DataserviceService) { }
  
  getAllUser(){
    return this.http.get<User[]>(`${this.url}/getAllUser`);
  }

  getAllAppointments(){
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointments`);
  }

  deleteUser(userid:number) {
    return this.http.delete<User[]>(`${this.url}/deleteUserById/${userid}`);
  }

  getUserById(userid:any){
    return this.http.get<User>(`${this.url}/getUserById/${userid}`);
  }

  updateUserById(userid: number, user: User){
    return this.http.put<User>(`${this.url}/updateUserById/${userid}`, user);
  }

  getSalonById(salonid:any){
    return this.http.get<Salon>(`${this.url}/getSalonById/${salonid}`)
  }

  updateSalonById(salonid: any, salon: Salon){
    salon.salonstatus='Approved';
    return this.http.put<Salon>(`${this.url}/updateSalonById/${salonid}`, salon);
  }

  deleteSalonById(salonid: any){
    return this.http.delete<Salon>(`${this.url}/deleteSalonByid/${salonid}`);
  }

}
