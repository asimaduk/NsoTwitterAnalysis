import {MatIconModule} from '@angular/material/icon';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GroupsComponent} from './groups.component';

const routes: Routes = [
  {path: '', component: GroupsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupsComponent],
  providers: []
})
export class GroupsModule {
}
