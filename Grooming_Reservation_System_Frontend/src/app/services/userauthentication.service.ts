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
  
  

  constructor(private dataservice: DataserviceService) { }
  
  validateUser(usermail: string  ) {
    console.log("in usermail");
    this.dataservice.getUserByEmail(usermail).subscribe(data => {
      this.userdata = data;
      
    },banckenderror1=>this.errorHandling(banckenderror1)
    )

  }
  errorHandling(banckenderror: any): void {
    console.log("inside error mail "+banckenderror);
    
   if(banckenderror.status == 400){
    console.log("400");
         alert("Invalid useremail");
   }
   
  }

  
  checkemailPass(usermail: string , userpass: string){
    console.log("in checkmail and pass");
    this.validateUser(usermail);
    if(this.userdata!=null){
      return this.dataservice.getUserByEmailPassword(usermail,userpass);
    }
    
    return null;
   
  }


  isUserLoggedIn(){
    let user= sessionStorage.getItem('usermail');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem("usermail");
  }
  
}

