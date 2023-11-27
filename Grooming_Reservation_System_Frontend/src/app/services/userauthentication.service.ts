import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { User } from '../dao/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {
  userdata : User;
  email: string;
  constructor(private dataservice: DataserviceService, private router: Router) { }

  validateUser(usermail: string , userpass: string ) {
    this.dataservice.getUserByEmail(usermail).subscribe(data => {
      this.email = data.useremail;
    },banckenderror=>this.errorHandling(banckenderror)
    )

  }
  errorHandling(banckenderror: any): void {
    console.log("inside error"+banckenderror);
    console.log("status="+banckenderror.status);
  
   if(banckenderror.status==400){
         alert("User email does not exist");
   }
   else{
    alert
   }
  }
  checkemailPass(usermail: string , userpass: string){
    return this.dataservice.getUserByEmailPassword(usermail,userpass);
  }

  isUserLoggedIn(){
    let user= sessionStorage.getItem('usermail');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem("usermail");
  }
  
}

