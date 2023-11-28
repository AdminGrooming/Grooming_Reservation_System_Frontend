import { Component } from '@angular/core';
import { User } from 'src/app/dao/user';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {

  userfirstname="";
  userlastname="";
  useremail="";
  userphonenumber="";
  userpassword=""; 

  user:User = new User(this.userfirstname,this.userlastname,this.useremail,this.userphonenumber,this.userpassword);

  register(){
    console.log(this.user);
    this.dataservice.adduser(this.user).subscribe();
  }

  constructor(private dataservice: DataserviceService){}

}
