import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QueryComponent} from './query.component';

import  { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  {path: '', component: QueryComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
  ],
  declarations: [QueryComponent],
  providers: []
})
export class QueryModule {
}
