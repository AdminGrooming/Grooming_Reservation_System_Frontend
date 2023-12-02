import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/dao/user';
import { DataserviceService } from 'src/app/services/userdataservices/userdataservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  userid: number = 0;
  userfirstname="";
  userlastname="";
  useremail="";
  userphonenumber="";
  userpassword=""; 

  user:User = new User(this.userid,this.userfirstname,this.userlastname,this.useremail,this.userphonenumber,this.userpassword);


  register(){
    // console.log(this.user);
    this.dataservice.adduser(this.user).subscribe( () => this.router.navigate(['login']),banckenderror=>this.errorHandling(banckenderror));
  }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==409){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px'}
      );
  }
}

  loginBtn(){
    this.router.navigate(['login']);
  }

  constructor(private dataservice: DataserviceService, private router: Router, private matDialog: MatDialog){}

}
