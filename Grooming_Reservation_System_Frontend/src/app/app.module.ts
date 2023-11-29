import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserregistrationComponent } from './components/userregistration/userregistration.component';
import { SalonregistrationComponent } from './components/salonregistration/salonregistration.component';
import { LpageComponent } from './components/lpage/lpage.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    UserregistrationComponent,
    SalonregistrationComponent,
    LpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
