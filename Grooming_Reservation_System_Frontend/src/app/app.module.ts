import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserregisterationComponent } from './components/userregisteration/userregisteration.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregisterationComponent,
    HomepageComponent,
    LandingpageComponent,
    UserregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
