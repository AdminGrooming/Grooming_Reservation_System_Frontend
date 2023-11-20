import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent},
  { path: 'login', component: LoginComponent },
  { path: "homepage", component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
