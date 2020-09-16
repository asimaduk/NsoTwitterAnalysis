import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from "@angular/forms";
import {LoginService} from "./login.service";
import { LoginComponent } from './login/login.component';
// import { CookieService } from 'ngx-cookie-service';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [LoginService, 
    // CookieService
  ],
})
export class LoginModule {
}
