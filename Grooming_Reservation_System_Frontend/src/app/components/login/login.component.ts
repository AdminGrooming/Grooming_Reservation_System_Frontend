import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userauthentication.service';
import { DataserviceService } from 'src/app/services/dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inpusermail= "";
  inpuserpass= "";
  loginuser:boolean= false ;
  

  constructor(private userauthentication: UserauthenticationService, private router: Router, private dataservice: DataserviceService){}

  
  handlelogin() {
    this.userauthentication.checkemailPass(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
              sessionStorage.setItem("usermail",data.useremail),
              this.router.navigate(['homepage']),
              this.loginuser = true
              },banckenderror=>this.errorHandling(banckenderror)
      );
    }  
  errorHandling(banckenderror: any): void {
    console.log("inside error"+banckenderror);
    console.log("status="+banckenderror.status);
  
   if(banckenderror.status==400){
         //this.errorMessage="Username not exists please register"
         alert("Not exists Please Register")
   }
   }
}
