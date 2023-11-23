import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { User } from '../dao/user';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {
  userdata : User;

  constructor(private dataservice: DataserviceService) { }

  validateUser(usermail: string | undefined, userpass: string | undefined) {
    this.dataservice.getUserByEmailPassword(usermail!,userpass!).subscribe(data => sessionStorage.setItem("usermail",data.useremail));
    return true;
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('usermail');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem("authenticateuser");
  }
  
}

