import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userauthentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
logout() {
  this.userauthentication.logout();
  this.router.navigate(['login']);
}
  constructor(private router:Router, private userauthentication: UserauthenticationService){}
  loginBtn():void{
    console.log("login button clicked")
    this.router.navigate(['login']);
  }
}
