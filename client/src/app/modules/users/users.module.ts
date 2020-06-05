import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from './users.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent],
  providers: []
})
export class UsersModule {
}
