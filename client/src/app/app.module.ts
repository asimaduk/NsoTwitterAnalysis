import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
// import { HTTP_INTERCEPTORS } from "@angular/common/http";
// import { NavigationModule } from "./modules/navigation/navigation.module";
import { HttpClientModule } from "@angular/common/http";
// import { DeviceDetectorService } from "ngx-device-detector";
// import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, LinkedinLoginProvider } from "angular-6-social-login-v2";
import {CommonModule} from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // NavigationModule,
    HttpClientModule,
    // DeviceDetectorService
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
