import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../dao/user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url='http://localhost:8990';

  constructor(private http: HttpClient) { }

  getUserByEmailPassword(email:string, password:string){
    return this.http.get<User>(`${this.url}/getUserByEmail/${email}/${password}`);
  }

  getUserByEmail(email:string){
    return this.http.get<User>(`${this.url}/getUserByEmail/${email}`);
  }
  

}
