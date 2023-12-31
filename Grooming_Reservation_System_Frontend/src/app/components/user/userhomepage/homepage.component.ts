import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userdataservices/userauthentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
username: string;

  ngOnInit(){
    this.username = sessionStorage.getItem("username");
    console.log(this.username);
  }

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
