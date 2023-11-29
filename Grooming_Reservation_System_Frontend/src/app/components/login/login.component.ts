import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userauthentication.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inpusermail= "";
  inpuserpass= "";
  loginuser:boolean= false ;
  

  constructor(private userauthentication: UserauthenticationService, private router: Router, private dataservice: DataserviceService, private snackbar: MatSnackBar){}

  registerBtn(){
    this.router.navigate(['userregistration']);
  }
  
  handlelogin() {
      console.log("In handle login")
      this.userauthentication.validateUser(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
              sessionStorage.setItem("usermail",data.useremail),
              sessionStorage.setItem("username",data.userfirstname),
              this.router.navigate(['homepage']),
              this.loginuser = true
              },banckenderror=>this.errorHandling(banckenderror)
              );
  }
  errorHandling(banckenderror: any): void {
      if(banckenderror.status==400){
            this.snackbar.open("Invalid credentials", 'close', {
              duration:3000,
              verticalPosition:'top',
              
      });
    }
   
  }
  
}
