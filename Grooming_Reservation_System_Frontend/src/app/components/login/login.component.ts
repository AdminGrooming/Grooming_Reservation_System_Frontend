import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userauthentication.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { User } from 'src/app/dao/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inpusermail:string;
  inpuserpass:string;
  loginuser = false ;
  user:User;
  

  constructor(private userauthentication: UserauthenticationService, private router: Router, private dataservice: DataserviceService){}

  
  handlelogin() {
      this.userauthentication.checkemailPass(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
                this.user=data;
                this.userValidation(this.user);
              },banckenderror=>this.errorHandling(banckenderror)
              
        
    );
       
  }
  errorHandling(banckenderror: any): void {
    console.log("inside error"+banckenderror.status);
    
   if(banckenderror.status==400){
         alert("Invalid password");
   }
  }

  userValidation(user:User){
   
      sessionStorage.setItem("usermail",btoa(user.useremail)),
      this.router.navigate(['homepage']),
      this.loginuser = true
   

  }

}
