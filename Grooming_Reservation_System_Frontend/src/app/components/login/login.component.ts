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
  inpusermail= "";
  inpuserpass= "";
  loginuser:boolean= false ;
  

  constructor(private userauthentication: UserauthenticationService, private router: Router, private dataservice: DataserviceService){}

  
  handlelogin() {
      console.log("In handle login")
      this.userauthentication.validateUser(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
              sessionStorage.setItem("usermail",data.useremail),
              sessionStorage.setItem("username",data.userfirstname),
              this.router.navigate(['homepage']),
              this.loginuser = true
              }
        
    );
}


}
