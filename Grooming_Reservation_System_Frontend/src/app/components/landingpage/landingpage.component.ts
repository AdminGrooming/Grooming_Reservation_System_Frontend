import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { UserregistrationComponent } from '../userregistration/userregistration.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  constructor(private router:Router,
    private dialog:MatDialog){}
  loginBtn():void{
    this.router.navigate(['login']);
  }
  register(){
    this.dialog.open(UserregistrationComponent,{
      height:'90%',
      width:'50%'
    })
  }
}
