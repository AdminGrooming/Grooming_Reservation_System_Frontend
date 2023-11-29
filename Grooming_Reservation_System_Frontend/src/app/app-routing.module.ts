import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RouteguardService } from './services/routeguard.service';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { SalonregistrationComponent } from './components/salonregistration/salonregistration.component';
import { LpageComponent } from './components/lpage/lpage.component';



const routes: Routes = [
  { path: '', redirectTo: "lpage", pathMatch: 'full' },
  { path: "lpage", component: LpageComponent},
  { path: "login", component: LoginComponent },
  { path: "homepage", component: HomepageComponent, canActivate:[RouteguardService] },
  { path: "userregistration", component: UserregistrationComponent },
  { path: "salonregistration", component: SalonregistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
