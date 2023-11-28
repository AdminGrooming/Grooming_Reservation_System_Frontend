import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RouteguardService } from './services/routeguard.service';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { SalonregistrationComponent } from './components/salonregistration/salonregistration.component';



const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent},
  { path: 'login', component: LoginComponent },
  { path: "homepage", component: HomepageComponent, canActivate:[RouteguardService] },
  { path: "userregistration", component: UserregistrationComponent },
  { path: "salonregistration", component: SalonregistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
