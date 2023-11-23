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
  loginuser: boolean | undefined;

  constructor(private userauthentication: UserauthenticationService, private router: Router, private dataservice: DataserviceService){}


  handlelogin() {
      console.log("btn pressed")
      if(this.userauthentication.validateUser(this.inpusermail,this.inpuserpass)){
        this.loginuser = true;
        this.router.navigate(['homepage']);
    }
    else {
      console.log("error");
      this.loginuser = false;
    }
  }
  
}
